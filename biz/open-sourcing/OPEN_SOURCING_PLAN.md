# Open Sourcing

## Business Model Evolution

- Phase 1 (Current): MIT license, hosted SaaS
- Phase 2 ($10K+ MRR): Consider AGPL to prevent SaaS competitors
- Phase 3 ($100K+ MRR): Consider Fair Source License with enterprise features

- optional enterprise feature layer if we see need: SSO, advanced analytics, SLA support. Core remains open source (MIT or AGPL).

## License

Recommended: Start with MIT (current), plan AGPL transition at $10K+ MRR

Actions:
- Keep MIT license for maximum adoption initially
- Document future license strategy in CONTRIBUTING.md
- Plan AGPL migration when you have traction (prevents SaaS competitors while staying OSI-approved)

## Repo Split

Move to private deployment repo:
- .github/workflows/deploy-production.yml → Private repo                                                                                   │
- .github/workflows/deploy-staging.yml → Private repo                                                                                      │
- .github/workflows/deploy-dev.yml → Private repo                                                                                          │
- .github/workflows/rollback-production.yml → Private repo

Workflow triggers:
- watch for new releases in public repo
- Pull image from Docker Hub
- Deploy to DigitalOcean
- Docker Hub publishing workflow:
  - Build on release tags
  - Push to Docker Hub
  - Keep quality gates as deployment requirements

Keep in open source:                                                                                                                       │
- .github/workflows/quality-gates.yml (CI tests - valuable for contributors)                                                               │
- All application code (backend, frontend, migrations)

## Update Documentation
- README.md: Add self-hosting instructions, remove DigitalOcean references                                                                 │
- CLAUDE.md: Add open-source contribution guidelines                                                                                       │
- Create SELF_HOSTING.md: Comprehensive self-hosting guide                                                                                 │
- Create CONTRIBUTING.md: Contribution guidelines

## Docker Self-Hosting Support

Create Production-Ready docker-compose.yml
- vibe-cms image
- supabase secrets

## Self-Hosting Documentation
Comprehensive guide covering:                                                                                                              │
- Prerequisites (Docker, Supabase project)                                                                                                 │
- Quick start (5-minute setup)                                                                                                             │
- Configuration options                                                                                                                    │
- Database migrations                                                                                                                      │
- Backup/restore procedures                                                                                                                │
- Upgrade process                                                                                                                          │
- Troubleshooting                                                                                                                          │
- Security best practices                                                                                                                  │
                                                                                                                                           │
Update README.md                                                                                                                       │
                                                                                                                                           │
Add prominent self-hosting section:                                                                                                        │
- Link to SELF_HOSTING.md                                                                                                                  │
- Docker Hub image reference                                                                                                               │
- Clear differentiation: "Use our cloud hosting OR self-host"                                                                              │
                                                                                                                                           │
Supabase Setup Guide                                                                                                                   │
                                                                                                                                           │
Document for self-hosters:                                                                                                                 │
- Creating Supabase project (local or cloud)                                                                                               │
- Running migrations: npx supabase migration up                                                                                            │
- Configuring RLS policies                                                                                                                 │
- Environment-specific considerations

Other considerations:
- Simplify .env.example
- Configuration Validator Script: check if all required env variables are set before starting

## Open Source Publishing

Make repository public:                                                                                                                    │
- Remove all production secrets from commit history (if any)                                                                               │
- Audit for sensitive data (API keys, passwords)                                                                                           │
- Consider git filter-repo if needed                                                                                                       │

Create standard open source files:                                                                                                         │
- CONTRIBUTING.md - How to contribute                                                                                                      │
- CODE_OF_CONDUCT.md - Community standards                                                                                                 │
- SECURITY.md - Security disclosure policy                                                                                                 │
- .github/ISSUE_TEMPLATE/ - Issue templates                                                                                                │
- .github/PULL_REQUEST_TEMPLATE.md - PR template

## Best Practices:

- Start with permissive license (MIT), can always tighten later
- Separate deployment secrets immediately
- Document self-hosting thoroughly (reduces support burden)
- Build community gradually (Discord, GitHub discussions)

