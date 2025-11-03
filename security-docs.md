# Chapter 11: Security & Permissions

Vibe CMS implements a **zero-trust security architecture** with defense-in-depth principles, combining dual authentication methods, PostgreSQL Row-Level Security (RLS), and database-layer validation to ensure complete data isolation and protection.

## Table of Contents

1. [Authentication Systems](#authentication-systems)
2. [Multi-Tenant Architecture](#multi-tenant-architecture)
3. [Row-Level Security (RLS)](#row-level-security-rls)
4. [API Key Management](#api-key-management)
5. [Zero-Trust Architecture](#zero-trust-architecture)
6. [Project Isolation](#project-isolation)
7. [Security Best Practices](#security-best-practices)
8. [Common Security Patterns](#common-security-patterns)

---

## Authentication Systems

Vibe CMS supports **dual authentication** to accommodate different use cases while maintaining strict security controls.

### JWT Authentication (User Sessions)

**Purpose**: Human users accessing the CMS admin interface

**Provider**: Supabase Auth with Basejump integration

**How it works**:
```typescript
// Frontend login
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'secure-password'
});

// JWT automatically included in subsequent requests
const response = await fetch('/api/projects', {
  headers: {
    'Authorization': `Bearer ${data.session.access_token}`
  }
});
```

**Key characteristics**:
- Session-based with automatic refresh
- Full access to all user-permitted operations
- **Required** for project management (create/update/delete projects)
- Provides access based on account membership roles
- Expires and requires re-authentication

### API Key Authentication (Machine-to-Machine)

**Purpose**: External systems, CI/CD pipelines, and AI agents accessing content programmatically

**How it works**:
```bash
# Using API key with curl
curl -H "X-API-Key: sk_your_api_key_here" \
     https://cms.vibecms.com/api/collections

# Or with Authorization header
curl -H "Authorization: Bearer sk_your_api_key_here" \
     https://cms.vibecms.com/api/collections
```

**Key characteristics**:
- Project-scoped (access to single project only)
- Read/write access to project content
- **Cannot** create, update, or delete projects
- No expiration by default (optional expiration supported)
- Instant revocation capability

### When to Use Each Method

| Use Case | Authentication Method | Why |
|----------|----------------------|-----|
| CMS Admin Interface | JWT | Full user session with all permissions |
| Content Editor | JWT | Role-based access with account membership |
| TypeScript SDK | API Key | Programmatic content access from web apps |
| MCP Server (AI Agents) | API Key | Machine-to-machine communication |
| CI/CD Pipeline | API Key | Automated deployments and content updates |
| Public Content API | API Key | Read-only access to published content |
| Project Creation | JWT Only | Requires account owner role |

---

## Multi-Tenant Architecture

Vibe CMS uses **Basejump** for secure multi-tenant architecture, ensuring complete data isolation between accounts.

### Basejump Accounts System

Every user and organization in Vibe CMS belongs to one or more **accounts**. Accounts are the primary isolation boundary for all data.

#### Account Types

**1. Personal Accounts**
- Automatically created when user signs up
- Single-member account (user is primary owner)
- Account ID matches user ID
- Cannot be deleted while user exists

```sql
-- Personal account structure
CREATE TABLE basejump.accounts (
  id UUID PRIMARY KEY,
  primary_owner_user_id UUID REFERENCES auth.users,
  name TEXT,
  personal_account BOOLEAN DEFAULT FALSE,
  ...
);
```

**2. Team Accounts**
- Created by users to collaborate
- Multiple members with different roles
- Hierarchical ownership structure
- Can be transferred or deleted by primary owner

### Role-Based Access Control

Basejump provides three built-in roles for team accounts:

| Role | Permissions | Can Invite Members | Can Manage Billing |
|------|------------|-------------------|-------------------|
| `primary_owner` | Full control | Yes | Yes |
| `owner` | Create/update/delete resources | Yes | Yes |
| `member` | View and edit content | No | No |

**Role checking in database functions**:
```sql
-- Check if user has any role on account
SELECT basejump.has_role_on_account(account_id) FROM projects;

-- Check for specific role (e.g., owner)
SELECT basejump.has_role_on_account(account_id, 'owner') FROM projects;
```

### Account-Level Data Isolation

Every CMS resource table includes an `account_id` foreign key:

```sql
-- Example: Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  account_id UUID NOT NULL REFERENCES basejump.accounts(id),
  name TEXT NOT NULL,
  ...
);

-- Example: Collections table
CREATE TABLE cms_collections (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL,
  account_id UUID NOT NULL REFERENCES basejump.accounts(id),
  ...
);
```

**Isolation guarantees**:
- Users can only access resources from accounts they belong to
- API keys are scoped to projects within a single account
- Cross-account access is impossible at database level
- Cascade deletes ensure complete cleanup

---

## Row-Level Security (RLS)

Vibe CMS enforces security at the **database layer** using PostgreSQL's Row-Level Security (RLS), ensuring protection even if application code is compromised.

### RLS Enforcement Pattern

All CMS tables follow the **"function-only access"** pattern:

1. **RLS Enabled**: All tables have RLS turned on
2. **No Policies**: Intentionally no RLS policies defined
3. **Zero Table Grants**: `authenticated` and `anon` roles have no direct table access
4. **Function-Only**: All access through `SECURITY DEFINER` functions

```sql
-- Example: Collections table security setup
ALTER TABLE cms_collections ENABLE ROW LEVEL SECURITY;

-- Revoke direct table access
REVOKE ALL ON TABLE cms_collections FROM authenticated;
REVOKE ALL ON TABLE cms_collections FROM anon;

-- Grant only to service_role (used by SECURITY DEFINER functions)
GRANT SELECT, INSERT, UPDATE, DELETE ON cms_collections TO service_role;
```

### Session Variables

The dual authentication system uses PostgreSQL session variables to track context:

| Variable | Set By | Used For |
|----------|--------|----------|
| `app.auth_type` | `authenticate_api_key()` | Distinguishing JWT vs API key auth |
| `app.current_project_id` | `authenticate_api_key()` | API key project scope |
| `app.current_account_id` | `authenticate_api_key()` | API key account scope |

```sql
-- Setting session variables during API key authentication
PERFORM set_config('app.auth_type', 'api_key', true);
PERFORM set_config('app.current_account_id', account_id::text, true);
PERFORM set_config('app.current_project_id', project_id::text, true);
```

### Core Security Helper Functions

#### `ensure_authenticated(p_api_key)`

Validates authentication at the start of every SECURITY DEFINER function.

```sql
CREATE OR REPLACE FUNCTION ensure_authenticated(p_api_key TEXT DEFAULT NULL)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER
AS $$
BEGIN
  -- If API key provided, validate it
  IF p_api_key IS NOT NULL THEN
    IF NOT EXISTS(SELECT 1 FROM authenticate_api_key(p_api_key)) THEN
      RAISE EXCEPTION 'Invalid or expired API key';
    END IF;
  END IF;
  -- If p_api_key is NULL, assumes JWT authentication
END;
$$;
```

#### `has_project_access(project_id)`

Validates that the authenticated user or API key can access a specific project.

```sql
CREATE OR REPLACE FUNCTION has_project_access(target_project_id UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql SECURITY DEFINER
AS $$
DECLARE
  auth_type TEXT;
  key_project_id TEXT;
  project_account UUID;
BEGIN
  -- Enforce authentication
  IF NOT is_authenticated() THEN
    RETURN FALSE;
  END IF;

  auth_type := current_setting('app.auth_type', true);

  IF auth_type = 'api_key' THEN
    -- API key: check project_id match
    key_project_id := current_setting('app.current_project_id', true);
    RETURN key_project_id::uuid = target_project_id;
  ELSE
    -- JWT: check account membership
    SELECT account_id INTO project_account FROM projects
    WHERE id = target_project_id;
    RETURN basejump.has_role_on_account(project_account);
  END IF;
END;
$$;
```

#### `can_manage_projects()`

Ensures only JWT-authenticated users can manage projects.

```sql
CREATE OR REPLACE FUNCTION can_manage_projects()
RETURNS BOOLEAN
LANGUAGE plpgsql SECURITY DEFINER
AS $$
BEGIN
  -- Require JWT authentication
  IF auth.uid() IS NULL THEN
    RETURN FALSE;
  END IF;

  -- Block API key authentication
  RETURN current_setting('app.auth_type', true) IS DISTINCT FROM 'api_key';
END;
$$;
```

### SECURITY DEFINER Functions

All data operations go through `SECURITY DEFINER` functions that bypass RLS but validate permissions internally:

```sql
CREATE OR REPLACE FUNCTION create_collection(
  project_id UUID,
  collection_name TEXT,
  collection_slug TEXT,
  p_api_key TEXT DEFAULT NULL
)
RETURNS SETOF cms_collections
LANGUAGE plpgsql
SECURITY DEFINER  -- Bypasses RLS, runs with elevated privileges
SET search_path = public, pg_temp  -- Security: prevent schema injection
AS $$
DECLARE
  target_account_id UUID;
BEGIN
  -- 1. Authenticate (JWT or API key)
  PERFORM ensure_authenticated(p_api_key);

  -- 2. Get account_id from project
  SELECT account_id INTO target_account_id
  FROM projects WHERE id = project_id;

  -- 3. Explicit permission check
  IF NOT has_project_access(project_id) THEN
    RAISE EXCEPTION 'Insufficient permissions';
  END IF;

  -- 4. Perform operation
  INSERT INTO cms_collections (project_id, account_id, name, slug)
  VALUES (project_id, target_account_id, collection_name, collection_slug)
  RETURNING *;
END;
$$;
```

**Security properties**:
- `SECURITY DEFINER`: Function runs with owner's privileges
- `SET search_path`: Prevents schema injection attacks
- Explicit authentication check before any operation
- Explicit permission validation (no assumption of RLS)
- All parameters strongly typed (SQL injection safe)

---

## API Key Management

API keys provide secure, project-scoped access for machine-to-machine communication.

### Key Format and Structure

API keys follow a structured format:

```
Format: sk_<random_40_chars>
Example: sk_BAsfW0u72O-ot-CuX7EqGHKh0h6vDxDhhR6UGfP1TsE
         │  │
         │  └─ Random base64-encoded bytes (URL-safe)
         └─── Prefix for key type identification
```

**Prefix** (`sk_` + 10 chars): Used for identification and display
**Full key**: Only shown once on creation, never retrievable later

### Key Storage and Hashing

**Security principle**: Never store plaintext API keys

```sql
CREATE TABLE project_api_keys (
  id UUID PRIMARY KEY,
  account_id UUID NOT NULL,
  project_id UUID NOT NULL,

  -- Display identification (NOT for security)
  name TEXT NOT NULL,
  prefix TEXT NOT NULL UNIQUE,  -- sk_ + 10 chars

  -- Security (bcrypt hashed)
  key_hash TEXT NOT NULL,  -- NEVER store plaintext

  -- Lifecycle
  is_active BOOLEAN DEFAULT TRUE,
  expires_at TIMESTAMPTZ,
  last_used_at TIMESTAMPTZ,
  ...
);
```

#### Bcrypt Hashing

Vibe CMS uses **bcrypt** with cost factor 10 for API key hashing:

```sql
-- Hash function
CREATE FUNCTION hash_api_key(api_key TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN extensions.crypt(api_key, extensions.gen_salt('bf', 10));
END;
$$ LANGUAGE plpgsql;
```

**Why bcrypt?**
- Slow by design (prevents brute force attacks)
- Built-in salt (prevents rainbow table attacks)
- Timing-safe comparison
- Industry-standard for password/key hashing

### Timing-Safe Comparison

The `authenticate_api_key` function prevents **timing attacks** and **key enumeration**:

```sql
CREATE FUNCTION authenticate_api_key(api_key TEXT)
RETURNS TABLE(key_id UUID, account_id UUID, project_id UUID, ...)
AS $$
DECLARE
  key_prefix TEXT;
  target_key RECORD;
BEGIN
  key_prefix := substring(api_key from 1 for 13);

  -- Timing-safe lookup with dummy key
  WITH candidate_key AS (
    SELECT * FROM project_api_keys
    WHERE prefix = key_prefix AND is_active = true
      AND (expires_at IS NULL OR expires_at > now())
    LIMIT 1
  ),
  dummy_key AS (
    -- Generate fake key if no match (constant-time operation)
    SELECT NULL::UUID as id,
           extensions.gen_salt('bf', 10) as key_hash,
           false as is_active, ...
  )
  SELECT * INTO target_key FROM (
    SELECT * FROM candidate_key
    UNION ALL SELECT * FROM dummy_key
    LIMIT 1
  ) x;

  -- Constant-time comparison (bcrypt always takes same time)
  IF target_key.key_hash = extensions.crypt(api_key, target_key.key_hash)
     AND target_key.is_active THEN
    -- Set session variables
    PERFORM set_config('app.auth_type', 'api_key', true);
    PERFORM set_config('app.current_project_id', target_key.project_id::text, true);
    PERFORM set_config('app.current_account_id', target_key.account_id::text, true);

    -- Async notification for usage tracking
    PERFORM pg_notify('api_key_used', target_key.id::text);

    RETURN QUERY SELECT target_key.id, target_key.account_id, ...;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

**Security features**:
1. **Dummy key**: Always performs bcrypt check even for invalid keys
2. **Constant time**: Execution time doesn't reveal key validity
3. **No enumeration**: Attacker can't determine which keys exist
4. **Async usage tracking**: Non-blocking via `pg_notify`

### Creating API Keys

Only JWT-authenticated account owners can create API keys:

```bash
# REST API endpoint
POST /api/projects/{project_id}/api-keys
Authorization: Bearer <user_jwt_token>

{
  "account_id": "account-uuid",
  "project_id": "project-uuid",
  "name": "Production API Key",
  "description": "Used by web application",
  "expires_at": "2025-12-31T23:59:59Z"  # Optional
}

# Response (full key shown ONCE)
{
  "id": "key-uuid",
  "api_key": "sk_BAsfW0u72O-ot-CuX7EqGHKh0h6vDxDhhR6UGfP1TsE",
  "prefix": "sk_BAsfW0u72O",
  "name": "Production API Key",
  "project_id": "project-uuid",
  "created_at": "2025-01-15T10:30:00Z"
}
```

**Backend implementation**:

```python
# FastAPI route (requires JWT authentication)
@router.post("/projects/{project_id}/api-keys")
async def create_api_key(
    project_id: str,
    key_data: ProjectApiKeyCreate,
    current_user: JWTUser = Depends(get_current_user)  # JWT required
) -> ProjectApiKeyResponse:
    result = await supabase.create_project_api_key(
        account_id=key_data.account_id,
        project_id=project_id,
        name=key_data.name,
        description=key_data.description,
        expires_at=key_data.expires_at
    )
    return ProjectApiKeyResponse(**result)
```

### Revoking API Keys

Instant revocation with immediate effect:

```bash
# Delete API key
DELETE /api/projects/{project_id}/api-keys/{key_id}
Authorization: Bearer <user_jwt_token>

# 204 No Content (success)
```

**Database operation**:
```sql
DELETE FROM project_api_keys WHERE id = key_id;
-- Cascade deletes any references
-- Immediate effect (no caching)
```

### Key Expiration

Optional expiration with automatic enforcement:

```sql
-- Expiration check during authentication
SELECT * FROM project_api_keys
WHERE prefix = key_prefix
  AND is_active = true
  AND (expires_at IS NULL OR expires_at > now());  -- Auto-reject expired
```

**Best practices**:
- Set expiration for temporary keys (CI/CD, testing)
- Use permanent keys (no expiration) for production services
- Rotate keys regularly (create new, delete old)
- Monitor `last_used_at` to detect unused keys

---

## Zero-Trust Architecture

Vibe CMS follows **zero-trust principles**: trust nothing, verify everything.

### Per-Request Authentication

Every request is authenticated independently:

```sql
-- EVERY SECURITY DEFINER function starts with:
CREATE FUNCTION some_operation(p_api_key TEXT DEFAULT NULL)
AS $$
BEGIN
  -- Authenticate THIS request
  PERFORM ensure_authenticated(p_api_key);

  -- Validate permissions for THIS operation
  IF NOT has_project_access(target_project_id) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  -- Perform operation
  ...
END;
$$;
```

**No trust assumptions**:
- No session state between requests
- No connection pooling assumptions
- No caching of permissions
- Every call validates from scratch

### Database-Layer Validation

All security enforcement happens at the database layer:

```
┌─────────────┐
│   Client    │ (Could be compromised)
└──────┬──────┘
       │ API Key or JWT
       ▼
┌─────────────┐
│  FastAPI    │ (Could be compromised)
│  Backend    │
└──────┬──────┘
       │ Passes key to database
       ▼
┌─────────────┐
│ PostgreSQL  │ ◄─── TRUST BOUNDARY
│   + RLS     │      All validation here
└─────────────┘
```

**Why database-layer?**
- PostgreSQL is trusted component
- RLS enforced even if app is compromised
- SECURITY DEFINER functions are auditable
- Schema-level security (search_path protection)
- Defense-in-depth with multiple layers

### No Session State

Unlike traditional applications, Vibe CMS maintains no server-side sessions:

**Traditional approach** (NOT used):
```python
# Bad: Session state (doesn't work with connection pooling)
if request.user.is_authenticated:
    return query_database()
```

**Zero-trust approach** (used):
```python
# Good: Validate every request at database layer
result = await supabase.rpc('get_collections', {
    'project_id': project_id,
    'p_api_key': api_key  # Validated per-request
})
```

### RPC Function Security

All database functions follow strict security patterns:

```sql
CREATE OR REPLACE FUNCTION secure_operation(
  param1 UUID,
  param2 TEXT,
  p_api_key TEXT DEFAULT NULL
)
RETURNS SETOF some_table
LANGUAGE plpgsql
SECURITY DEFINER              -- Elevated privileges
SET search_path = public, pg_temp  -- Prevent injection
AS $$
BEGIN
  -- 1. Authenticate
  PERFORM ensure_authenticated(p_api_key);

  -- 2. Validate permissions
  IF NOT has_project_access(param1) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  -- 3. Perform operation
  RETURN QUERY SELECT * FROM some_table WHERE project_id = param1;
END;
$$;

-- Grant to both roles (authentication happens in function)
GRANT EXECUTE ON FUNCTION secure_operation(UUID, TEXT, TEXT)
TO authenticated, anon;
```

**Critical security features**:
1. `SECURITY DEFINER`: Function runs with elevated privileges
2. `SET search_path`: Prevents malicious schema injection
3. Explicit authentication check
4. Explicit permission validation
5. Strongly typed parameters (no SQL injection)
6. Granted to `anon` role (API keys) and `authenticated` (JWT)

---

## Project Isolation

Projects are the primary organizational unit in Vibe CMS, with strict isolation guarantees.

### JWT-Only Project Management

**Critical security rule**: Projects can ONLY be managed via JWT authentication.

```sql
-- Project creation function (JWT-only)
CREATE FUNCTION create_project(
  account_id UUID,
  project_name TEXT,
  ...
  -- NO p_api_key parameter
)
RETURNS SETOF projects
AS $$
BEGIN
  -- Check JWT authentication AND owner role
  IF NOT basejump.has_role_on_account(account_id, 'owner') THEN
    RAISE EXCEPTION 'Only account owners can create projects';
  END IF;

  INSERT INTO projects (account_id, name, created_by)
  VALUES (account_id, project_name, auth.uid())  -- auth.uid() requires JWT
  RETURNING *;
END;
$$;

-- Grant ONLY to authenticated role (not anon)
GRANT EXECUTE ON FUNCTION create_project(UUID, TEXT) TO authenticated;
```

**Why JWT-only?**
- Projects are organization-level resources
- API keys are project-scoped (can't create their own scope)
- Requires human approval and account owner role
- Prevents API key escalation attacks

### Project-Scoped Resources

All CMS resources belong to exactly one project:

```sql
-- Every resource table includes project_id
CREATE TABLE cms_collections (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  account_id UUID NOT NULL REFERENCES basejump.accounts(id),
  ...
);

CREATE TABLE cms_content_items (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  collection_id UUID NOT NULL,
  ...
);

CREATE TABLE cms_files (
  id UUID PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  folder_id UUID,
  ...
);
```

### Cross-Project Access Prevention

The `has_project_access()` function ensures strict project boundaries:

```sql
-- API key validation
IF auth_type = 'api_key' THEN
  key_project_id := current_setting('app.current_project_id', true);
  -- Can ONLY access the key's project
  RETURN key_project_id::uuid = target_project_id;
END IF;

-- JWT validation
-- Can access any project in user's accounts
SELECT account_id INTO project_account
FROM projects WHERE id = target_project_id;
RETURN basejump.has_role_on_account(project_account);
```

**Isolation guarantees**:
- API keys cannot access other projects (even in same account)
- JWT users access projects via account membership only
- No direct project sharing between accounts
- Foreign key cascades ensure complete isolation

### Data Isolation Guarantees

**Account level**:
- Users can only see projects in their accounts
- API keys tied to single account
- No cross-account queries possible

**Project level**:
- Collections, content, files scoped to project
- API keys scoped to single project
- Cascade deletes remove all project data

**Enforcement**:
```sql
-- Every query includes project validation
SELECT * FROM cms_collections
WHERE project_id = target_project_id  -- Validated by has_project_access()
  AND ...;
```

---

## Security Best Practices

### API Key Storage and Rotation

**DO**:
✅ Store API keys in environment variables
✅ Use secret management services (AWS Secrets Manager, HashiCorp Vault)
✅ Rotate keys regularly (quarterly or after incidents)
✅ Use different keys for development, staging, production
✅ Delete unused keys immediately

**DON'T**:
❌ Never commit API keys to version control
❌ Never hardcode keys in application code
❌ Never share keys via email or chat
❌ Never use production keys in development
❌ Never log full API keys

### Environment Variable Usage

**Proper setup**:
```bash
# .env file (NEVER commit to git)
VIBE_CMS_API_KEY=sk_prod_BAsfW0u72O-ot-CuX7EqGHKh0h6vDxDhhR6UGfP1TsE
VIBE_CMS_PROJECT_URL=https://cms.vibecms.com

# .env.example file (safe to commit)
VIBE_CMS_API_KEY=sk_your_api_key_here
VIBE_CMS_PROJECT_URL=https://cms.vibecms.com

# .gitignore
.env
.env.local
```

**Application usage**:
```typescript
import { VibeCMSClient } from '@vibe-cms/sdk';

const cms = new VibeCMSClient({
  projectUrl: process.env.VIBE_CMS_PROJECT_URL,
  apiKey: process.env.VIBE_CMS_API_KEY  // From environment
});
```

### Never Commit Keys to Git

**If you accidentally commit a key**:

1. **Revoke immediately**:
```bash
curl -X DELETE \
  -H "Authorization: Bearer ${JWT_TOKEN}" \
  https://cms.vibecms.com/api/projects/{project_id}/api-keys/{key_id}
```

2. **Create new key** with different name

3. **Clean git history** (if repository is private):
```bash
# Use git-filter-repo (recommended)
git filter-repo --path-match .env --invert-paths

# Or BFG Repo-Cleaner
bfg --replace-text passwords.txt
```

4. **Force push** (⚠️ only if repository is private)

5. **Notify team** if repository was ever public

### Key Naming Conventions

Use descriptive, contextual names:

```
✅ Good:
- production-web-app
- staging-deployment
- ci-cd-pipeline
- dev-local-machine
- mcp-claude-desktop

❌ Bad:
- key1
- test
- mykey
- temp
```

### Monitoring and Audit Logs

**Track API key usage**:
```sql
-- View key usage
SELECT id, name, prefix, last_used_at, created_at
FROM project_api_keys
WHERE project_id = 'your-project-id'
ORDER BY last_used_at DESC;

-- Identify unused keys
SELECT name, prefix, created_at
FROM project_api_keys
WHERE project_id = 'your-project-id'
  AND (last_used_at IS NULL OR last_used_at < NOW() - INTERVAL '30 days')
  AND is_active = true;
```

**Monitor authentication failures**:
- Set up logging for failed `authenticate_api_key` calls
- Alert on unusual access patterns
- Review access logs regularly

### Principle of Least Privilege

**API keys**:
- Create separate keys for each service/application
- Revoke keys when service is deprecated
- Use short-lived keys for temporary access
- Set expiration for CI/CD and testing keys

**User accounts**:
- Grant minimum role needed (member vs owner)
- Use personal accounts for individual work
- Use team accounts for shared resources
- Regular audit of account memberships

---

## Common Security Patterns

### Service Accounts with API Keys

**Pattern**: Dedicated API key for each service

```typescript
// Web application (Next.js, Astro, etc.)
const cms = new VibeCMSClient({
  projectUrl: process.env.VIBE_CMS_PROJECT_URL,
  apiKey: process.env.VIBE_CMS_WEB_APP_KEY
});

// Background worker
const cms = new VibeCMSClient({
  projectUrl: process.env.VIBE_CMS_PROJECT_URL,
  apiKey: process.env.VIBE_CMS_WORKER_KEY
});

// CI/CD pipeline
const cms = new VibeCMSClient({
  projectUrl: process.env.VIBE_CMS_PROJECT_URL,
  apiKey: process.env.VIBE_CMS_CICD_KEY
});
```

**Benefits**:
- Individual key revocation
- Per-service usage tracking
- Isolated security scope
- Easy rotation

### User Authentication with JWT

**Pattern**: Human users with session-based auth

```typescript
// Frontend login
const { data, error } = await supabase.auth.signInWithPassword({
  email: user.email,
  password: user.password
});

// Automatic JWT refresh
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'TOKEN_REFRESHED') {
    console.log('JWT refreshed automatically');
  }
});

// API calls with JWT
const response = await fetch('/api/projects', {
  headers: {
    'Authorization': `Bearer ${session.access_token}`
  }
});
```

### MCP Server Authentication

**Pattern**: AI agents with API key authentication

```json
// Claude Desktop config
{
  "mcpServers": {
    "vibe-cms": {
      "url": "https://cms.vibecms.com/mcp",
      "headers": {
        "X-API-Key": "sk_your_mcp_server_key_here"
      }
    }
  }
}
```

**Backend validation**:
```python
from app.services.mcp.auth import authenticate_with_api_key

async def mcp_endpoint(request: Request):
    # Extract API key from headers
    api_key = request.headers.get('X-API-Key')

    # Validate with database
    service, key_info = await authenticate_with_api_key(api_key)

    # All subsequent operations use validated service
    collections = await service.get_collections_for_project(
        key_info['project_id']
    )
```

### Public API Access for Published Content

**Pattern**: Read-only API key for public content

```typescript
// Public website fetching published content
const cms = new VibeCMSClient({
  projectUrl: 'https://cms.vibecms.com',
  apiKey: process.env.VIBE_CMS_PUBLIC_KEY  // Read-only key
});

// Fetch published blog posts
const posts = await cms
  .collection('blog-posts')
  .status('published')
  .all();

// Render on website
posts.forEach(post => {
  console.log(post.title, post.content);
});
```

**Security notes**:
- Use separate API key for public access
- Only fetch published content
- Rate limit public endpoints
- Monitor for abuse

---

## Summary

Vibe CMS implements **defense-in-depth security** with multiple layers:

1. **Dual authentication**: JWT for users, API keys for machines
2. **Database-layer enforcement**: PostgreSQL RLS with SECURITY DEFINER functions
3. **Zero-trust architecture**: Per-request validation, no session state
4. **Multi-tenant isolation**: Basejump accounts with complete data separation
5. **Timing-safe operations**: Bcrypt hashing, constant-time comparison
6. **Project-scoped access**: API keys limited to single project
7. **JWT-only project management**: Human approval required for organization changes
8. **Audit trails**: Usage tracking, creation logs, last-used timestamps

**Key takeaway**: Security is enforced at the database layer, not the application layer. Even if application code is compromised, PostgreSQL RLS protects all data.

---

## Next Steps

- **[Chapter 12: Advanced Querying](#)**: Complex content queries and filters
- **[Chapter 13: Webhooks & Events](#)**: Real-time notifications and integrations
- **[API Reference](#)**: Complete API documentation

---

**Questions or security concerns?** Open an issue on [GitHub](https://github.com/yourusername/vibe-cms) or contact our security team.
