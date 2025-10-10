# Deployment & Infrastructure

**Checkpoint Section:** 1. Technical Deployment
**Owner:** Technical Team / DevOps
**Deadline:** October 18, 2025

## Overview

Production infrastructure setup, monitoring, backups, and deployment automation for VMS/Vanua.

## Key Deliverables

### 1. Production Hosting (Oct 18)
- [ ] Choose hosting provider (Vercel/Railway/AWS/Fly.io)
- [ ] Set up production Supabase instance
- [ ] Configure production database + migrations
- [ ] Set up environment variables (secrets management)
- [ ] Configure CDN for static assets and files
- [ ] Set up custom domain DNS
- [ ] Configure SSL certificates (auto-renew)
- [ ] Production CORS settings

### 2. Monitoring & Observability (Oct 18)
- [ ] Error tracking (Sentry recommended)
- [ ] Session replay (LogRocket/PostHog)
- [ ] Uptime monitoring (UptimeRobot/Pingdom)
- [ ] Performance monitoring (Lighthouse CI)
- [ ] Database monitoring (Supabase dashboard)
- [ ] API latency tracking

### 3. Backups & Disaster Recovery (Oct 15)
- [ ] Automated database backups (daily)
- [ ] File storage backups (Supabase storage)
- [ ] Backup retention policy (30 days)
- [ ] Disaster recovery runbook
- [ ] Test restore procedure

### 4. Performance Targets
- [ ] API response time < 500ms (p95)
- [ ] Page load time < 2s (p75)
- [ ] Lighthouse score > 90 (desktop)
- [ ] 99.9% uptime SLA
- [ ] CDN cache hit rate > 80%

## Hosting Decision Matrix

| Provider | Pros | Cons | Cost/mo |
|----------|------|------|---------|
| **Vercel** | Easy deploy, great DX, fast CDN | Expensive at scale | $20-100 |
| **Railway** | Simple, affordable, Docker support | Newer, less proven | $10-50 |
| **Fly.io** | Global edge, good pricing | More config needed | $15-60 |
| **AWS (Lightsail)** | Cheap, reliable | More complex setup | $10-40 |

**Recommendation:** Vercel for frontend, Railway/Fly.io for backend
**Rationale:** Fast iteration, good monitoring, reasonable cost

## Infrastructure as Code

Use **Terraform** or provider-specific tools:
```
deployment-infrastructure/
├── terraform/
│   ├── production.tf
│   ├── staging.tf
│   └── variables.tf
├── docker/
│   ├── Dockerfile.backend
│   └── Dockerfile.frontend
└── scripts/
    ├── deploy-production.sh
    ├── rollback.sh
    └── health-check.sh
```

## Monitoring Setup

### Error Tracking (Sentry)
```bash
npm install @sentry/vue @sentry/node
# Configure DSN in env vars
# Set up source maps upload
# Configure error rate alerts
```

### Uptime Monitoring (UptimeRobot)
- Monitor endpoints:
  - https://vibecms.ai (main site)
  - https://vibecms.ai/api/health (backend)
  - https://vibecms.ai/api/config (config endpoint)
- Alert channels: Email, Slack
- Check interval: 5 minutes

### Performance Monitoring
- Lighthouse CI in GitHub Actions
- Track Core Web Vitals
- Alert if scores drop below threshold

## Deployment Checklist (Oct 20)

### Pre-Deploy
- [ ] All tests passing (E2E, API, database)
- [ ] Database migrations reviewed
- [ ] Environment variables set (production)
- [ ] DNS configured (TTL lowered 24h prior)
- [ ] SSL certificates provisioned
- [ ] Monitoring dashboards ready
- [ ] Rollback plan documented

### Deploy Day
- [ ] Final staging test
- [ ] Database backup created
- [ ] Deploy backend (blue-green if possible)
- [ ] Deploy frontend
- [ ] Switch DNS to production
- [ ] Verify health checks green
- [ ] Monitor error rates (first hour)
- [ ] Send test transactions (payment, signup)

### Post-Deploy
- [ ] Monitor for 24 hours
- [ ] Check error rates hourly
- [ ] Verify backups running
- [ ] Update status page
- [ ] Team retrospective

## Emergency Runbooks

### Database Restore
```bash
# 1. Stop application
# 2. Download latest backup
# 3. Restore to new instance
# 4. Verify data integrity
# 5. Switch connection string
# 6. Restart application
```

### Rollback Procedure
```bash
# 1. Identify last known good version (git tag)
# 2. Deploy previous version
# 3. Rollback database migration (if needed)
# 4. Verify health checks
# 5. Notify users
```

## Cost Estimates (Monthly)

| Service | Tier | Cost |
|---------|------|------|
| Vercel (Frontend) | Pro | $20 |
| Railway (Backend) | Pro | $20 |
| Supabase | Pro | $25 |
| Domain (.ai) | - | $10 |
| Sentry | Team | $26 |
| UptimeRobot | Free | $0 |
| **Total** | | **~$101/mo** |

As we scale:
- Vercel: $100-300/mo (bandwidth)
- Railway: $50-200/mo (resources)
- Supabase: $25-100/mo (database size)

---

**Start Here:** Set up staging environment, test deployment pipeline
