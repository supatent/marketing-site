-- Compliance Database Schema for VMS/Vanua CMS
-- Purpose: Track user consents, data requests, and security incidents for GDPR compliance
-- Created: October 4, 2025
-- Target: Backend Team / Database Administrator

-- ============================================================================
-- 1. USER CONSENT TRACKING
-- ============================================================================
-- Tracks all user consent history for GDPR compliance
-- Required for: GDPR Article 7 (Conditions for consent)

CREATE TABLE IF NOT EXISTS user_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,

  -- Consent details
  consent_type VARCHAR(50) NOT NULL, -- 'privacy_policy', 'terms_service', 'marketing', 'analytics', 'performance'
  consent_given BOOLEAN NOT NULL,

  -- Version tracking
  policy_version VARCHAR(20) NOT NULL, -- e.g., 'v1.0', 'v1.1'

  -- Audit trail
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_address INET, -- User's IP when consent was given
  user_agent TEXT, -- Browser/device information

  -- Metadata
  notes TEXT, -- Optional notes about consent change

  -- Indexes for performance
  CONSTRAINT unique_user_consent UNIQUE(user_id, consent_type, timestamp)
);

-- Indexes for fast lookups
CREATE INDEX idx_user_consents_user_id ON user_consents(user_id);
CREATE INDEX idx_user_consents_type ON user_consents(consent_type);
CREATE INDEX idx_user_consents_timestamp ON user_consents(timestamp DESC);

-- Row Level Security (RLS)
ALTER TABLE user_consents ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only view their own consents
CREATE POLICY "Users can view own consents"
  ON user_consents FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own consents
CREATE POLICY "Users can insert own consents"
  ON user_consents FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Admins can view all consents
CREATE POLICY "Admins can view all consents"
  ON user_consents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM basejump.account_user
      WHERE user_id = auth.uid()
      AND account_role = 'owner'
    )
  );

-- Comments
COMMENT ON TABLE user_consents IS 'Tracks all user consent history for GDPR compliance (Article 7)';
COMMENT ON COLUMN user_consents.consent_type IS 'Type of consent: privacy_policy, terms_service, marketing, analytics, performance';
COMMENT ON COLUMN user_consents.policy_version IS 'Version of the policy/terms that was consented to (e.g., v1.0)';
COMMENT ON COLUMN user_consents.ip_address IS 'IP address of user when consent was given (for audit trail)';

-- ============================================================================
-- 2. DATA PROCESSING REQUESTS
-- ============================================================================
-- Tracks GDPR data subject requests (export, deletion, rectification)
-- Required for: GDPR Articles 15-22 (Data subject rights)

CREATE TABLE IF NOT EXISTS data_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,

  -- Request details
  request_type VARCHAR(20) NOT NULL CHECK (request_type IN ('export', 'deletion', 'rectification', 'restriction', 'objection')),
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),

  -- Processing details
  requested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  processing_started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,

  -- Request metadata
  request_details JSONB, -- Additional context about the request
  notes TEXT, -- Processing notes

  -- Fulfillment
  export_file_url TEXT, -- For data export requests
  deletion_confirmed BOOLEAN DEFAULT FALSE, -- For deletion requests

  -- Audit
  processed_by UUID REFERENCES auth.users(id), -- Admin who processed the request

  CONSTRAINT valid_completion CHECK (
    (status = 'completed' AND completed_at IS NOT NULL) OR
    (status != 'completed' AND completed_at IS NULL)
  )
);

-- Indexes
CREATE INDEX idx_data_requests_user_id ON data_requests(user_id);
CREATE INDEX idx_data_requests_status ON data_requests(status);
CREATE INDEX idx_data_requests_type ON data_requests(request_type);
CREATE INDEX idx_data_requests_requested_at ON data_requests(requested_at DESC);

-- RLS Policies
ALTER TABLE data_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own requests
CREATE POLICY "Users can view own data requests"
  ON data_requests FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can create their own requests
CREATE POLICY "Users can create own data requests"
  ON data_requests FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Admins can view and update all requests
CREATE POLICY "Admins can manage all data requests"
  ON data_requests FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM basejump.account_user
      WHERE user_id = auth.uid()
      AND account_role IN ('owner', 'admin')
    )
  );

-- Comments
COMMENT ON TABLE data_requests IS 'Tracks GDPR data subject requests: export, deletion, rectification (Articles 15-22)';
COMMENT ON COLUMN data_requests.request_type IS 'Type: export (Art. 15,20), deletion (Art. 17), rectification (Art. 16), restriction (Art. 18), objection (Art. 21)';
COMMENT ON COLUMN data_requests.export_file_url IS 'URL to download exported data (expires after 7 days)';

-- ============================================================================
-- 3. SECURITY INCIDENTS / DATA BREACHES
-- ============================================================================
-- Logs security incidents for GDPR breach notification compliance
-- Required for: GDPR Articles 33-34 (Notification of breach)

CREATE TABLE IF NOT EXISTS security_incidents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Incident details
  incident_type VARCHAR(50) NOT NULL, -- 'data_breach', 'unauthorized_access', 'system_compromise', etc.
  severity VARCHAR(20) NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),

  -- Description
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,

  -- Impact assessment
  affected_users INTEGER, -- Number of users affected
  affected_data_types TEXT[], -- ['emails', 'passwords', 'content', 'files']
  risk_level VARCHAR(20) CHECK (risk_level IN ('low', 'high')), -- Low or high risk to users

  -- Regulatory compliance
  reported_to_authority BOOLEAN DEFAULT FALSE,
  authority_name VARCHAR(100), -- e.g., 'Swiss FDPIC', 'German DPA'
  reported_at TIMESTAMPTZ,
  notification_deadline TIMESTAMPTZ, -- 72 hours from discovery

  -- User notification
  users_notified BOOLEAN DEFAULT FALSE,
  users_notified_at TIMESTAMPTZ,

  -- Resolution
  status VARCHAR(20) DEFAULT 'investigating' CHECK (status IN ('investigating', 'contained', 'resolved', 'closed')),
  resolved_at TIMESTAMPTZ,
  resolution_notes TEXT,

  -- Audit trail
  discovered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  discovered_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT deadline_if_high_risk CHECK (
    (risk_level = 'high' AND notification_deadline IS NOT NULL) OR
    risk_level != 'high'
  )
);

-- Indexes
CREATE INDEX idx_security_incidents_severity ON security_incidents(severity);
CREATE INDEX idx_security_incidents_status ON security_incidents(status);
CREATE INDEX idx_security_incidents_discovered_at ON security_incidents(discovered_at DESC);
CREATE INDEX idx_security_incidents_reported ON security_incidents(reported_to_authority);

-- RLS Policies
ALTER TABLE security_incidents ENABLE ROW LEVEL SECURITY;

-- Policy: Only admins/security team can access incident data
CREATE POLICY "Only admins can manage security incidents"
  ON security_incidents FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM basejump.account_user
      WHERE user_id = auth.uid()
      AND account_role = 'owner'
    )
  );

-- Comments
COMMENT ON TABLE security_incidents IS 'Logs security incidents and data breaches for GDPR compliance (Articles 33-34)';
COMMENT ON COLUMN security_incidents.notification_deadline IS '72 hours from discovery for high-risk breaches (GDPR Article 33)';
COMMENT ON COLUMN security_incidents.risk_level IS 'High risk requires user notification (GDPR Article 34)';

-- ============================================================================
-- 4. COOKIE CONSENT TRACKING
-- ============================================================================
-- Tracks cookie consent preferences for GDPR ePrivacy compliance

CREATE TABLE IF NOT EXISTS cookie_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE, -- NULL for anonymous users

  -- Consent preferences
  strictly_necessary BOOLEAN DEFAULT TRUE, -- Always true
  functional BOOLEAN DEFAULT FALSE,
  analytics BOOLEAN DEFAULT FALSE,
  performance BOOLEAN DEFAULT FALSE,

  -- Tracking
  consent_version VARCHAR(20) NOT NULL, -- e.g., 'v1.0'
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT,

  -- Anonymous tracking (for users not logged in)
  anonymous_id VARCHAR(100), -- UUID generated in browser

  CONSTRAINT user_or_anonymous CHECK (
    (user_id IS NOT NULL AND anonymous_id IS NULL) OR
    (user_id IS NULL AND anonymous_id IS NOT NULL)
  )
);

-- Indexes
CREATE INDEX idx_cookie_consents_user_id ON cookie_consents(user_id);
CREATE INDEX idx_cookie_consents_anonymous_id ON cookie_consents(anonymous_id);
CREATE INDEX idx_cookie_consents_timestamp ON cookie_consents(timestamp DESC);

-- RLS Policies
ALTER TABLE cookie_consents ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own cookie consents
CREATE POLICY "Users can view own cookie consents"
  ON cookie_consents FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Policy: Anyone can insert cookie consents (including anonymous)
CREATE POLICY "Anyone can insert cookie consents"
  ON cookie_consents FOR INSERT
  WITH CHECK (true);

-- Comments
COMMENT ON TABLE cookie_consents IS 'Tracks cookie consent preferences for GDPR ePrivacy compliance';
COMMENT ON COLUMN cookie_consents.anonymous_id IS 'Browser-generated UUID for tracking consent of non-logged-in users';

-- ============================================================================
-- 5. HELPER FUNCTIONS
-- ============================================================================

-- Function: Get latest consent for a user
CREATE OR REPLACE FUNCTION get_latest_consent(
  p_user_id UUID,
  p_consent_type VARCHAR(50)
) RETURNS TABLE (
  consent_given BOOLEAN,
  policy_version VARCHAR(20),
  timestamp TIMESTAMPTZ
) AS $$
BEGIN
  RETURN QUERY
  SELECT uc.consent_given, uc.policy_version, uc.timestamp
  FROM user_consents uc
  WHERE uc.user_id = p_user_id
    AND uc.consent_type = p_consent_type
  ORDER BY uc.timestamp DESC
  LIMIT 1;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Check if data export is pending for user
CREATE OR REPLACE FUNCTION has_pending_export(p_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM data_requests
    WHERE user_id = p_user_id
      AND request_type = 'export'
      AND status IN ('pending', 'processing')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Get breach notification deadline (72 hours)
CREATE OR REPLACE FUNCTION set_breach_notification_deadline()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.risk_level = 'high' AND NEW.notification_deadline IS NULL THEN
    NEW.notification_deadline := NEW.discovered_at + INTERVAL '72 hours';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger: Auto-set breach notification deadline
CREATE TRIGGER set_breach_deadline
  BEFORE INSERT ON security_incidents
  FOR EACH ROW
  EXECUTE FUNCTION set_breach_notification_deadline();

-- ============================================================================
-- 6. VIEWS FOR REPORTING
-- ============================================================================

-- View: Consent summary by user
CREATE OR REPLACE VIEW user_consent_summary AS
SELECT
  u.id AS user_id,
  u.email,
  MAX(CASE WHEN uc.consent_type = 'privacy_policy' THEN uc.consent_given END) AS privacy_policy_accepted,
  MAX(CASE WHEN uc.consent_type = 'terms_service' THEN uc.consent_given END) AS terms_accepted,
  MAX(CASE WHEN uc.consent_type = 'marketing' THEN uc.consent_given END) AS marketing_consent,
  MAX(CASE WHEN uc.consent_type = 'analytics' THEN uc.consent_given END) AS analytics_consent,
  MAX(uc.timestamp) AS last_consent_update
FROM auth.users u
LEFT JOIN LATERAL (
  SELECT * FROM user_consents
  WHERE user_id = u.id
  ORDER BY timestamp DESC
  LIMIT 1
) uc ON true
GROUP BY u.id, u.email;

-- View: Pending data requests dashboard
CREATE OR REPLACE VIEW pending_data_requests AS
SELECT
  dr.id,
  u.email,
  dr.request_type,
  dr.status,
  dr.requested_at,
  EXTRACT(EPOCH FROM (NOW() - dr.requested_at))/3600 AS hours_pending
FROM data_requests dr
JOIN auth.users u ON dr.user_id = u.id
WHERE dr.status IN ('pending', 'processing')
ORDER BY dr.requested_at ASC;

-- View: Active security incidents
CREATE OR REPLACE VIEW active_security_incidents AS
SELECT
  id,
  incident_type,
  severity,
  title,
  affected_users,
  risk_level,
  reported_to_authority,
  notification_deadline,
  EXTRACT(EPOCH FROM (notification_deadline - NOW()))/3600 AS hours_until_deadline,
  status,
  discovered_at
FROM security_incidents
WHERE status NOT IN ('resolved', 'closed')
  AND (notification_deadline IS NULL OR notification_deadline > NOW())
ORDER BY severity DESC, discovered_at DESC;

-- ============================================================================
-- 7. SAMPLE DATA (FOR TESTING)
-- ============================================================================

-- Insert sample consent record
-- INSERT INTO user_consents (user_id, consent_type, consent_given, policy_version, ip_address)
-- VALUES (
--   'user-uuid-here',
--   'privacy_policy',
--   true,
--   'v1.0',
--   '192.168.1.1'::inet
-- );

-- Insert sample data request
-- INSERT INTO data_requests (user_id, request_type, status)
-- VALUES (
--   'user-uuid-here',
--   'export',
--   'pending'
-- );

-- ============================================================================
-- MIGRATION NOTES
-- ============================================================================
-- 1. Run this schema after Basejump is set up (requires auth.users table)
-- 2. Ensure RLS is enabled on all tables for security
-- 3. Test all policies with different user roles (owner, admin, member)
-- 4. Create indexes for performance on large datasets
-- 5. Set up automated cleanup for old consent records (optional)

-- Cleanup policy (optional): Delete consent records older than 7 years
-- CREATE OR REPLACE FUNCTION cleanup_old_consents()
-- RETURNS void AS $$
-- BEGIN
--   DELETE FROM user_consents
--   WHERE timestamp < NOW() - INTERVAL '7 years';
-- END;
-- $$ LANGUAGE plpgsql;
