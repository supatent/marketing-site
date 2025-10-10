# Pricing & Payments

**Checkpoint Section:** 5. Pricing Model
**Owner:** Product Team / Finance
**Deadline:** October 10, 2025

## Overview

Pricing strategy, payment integration, subscription management, and billing infrastructure.

## Key Deliverables

### 1. Pricing Tiers (To Validate)

| Tier | Price | Target | Limits |
|------|-------|--------|--------|
| Free | $0 | Hobbyists | 1 project, 1 user, 1K items, 1GB |
| Pro | $29/mo | Teams | 5 projects, 5 users, 10K items, 10GB |
| Team | $99/mo | Companies | 20 projects, 20 users, 100K items, 100GB |
| Enterprise | Custom | Orgs | Unlimited + SSO + on-prem |

### 2. Stripe Integration
- [ ] Stripe account setup (production keys)
- [ ] Subscription billing (Basejump integration)
- [ ] Webhook handlers (payment events)
- [ ] Invoice generation
- [ ] Tax calculation (VAT/sales tax)
- [ ] Test flows: signup, upgrade, downgrade, cancel

### 3. Pricing Page
- [ ] Comparison table design
- [ ] FAQ section
- [ ] Enterprise contact sales CTA
- [ ] Annual discount (e.g., 2 months free)

## Research Topics

1. **Competitive Pricing Analysis**
   - Contentful: $300/mo (Pro)
   - Sanity: $99/mo (Team)
   - Strapi: Self-hosted free, Cloud $99/mo
   - How do we position?

2. **Payment Psychology**
   - Monthly vs annual (discount %)
   - Free tier limits (conversion funnel)
   - Pricing anchoring (Enterprise "custom" vs concrete numbers)

3. **Stripe Best Practices**
   - Dunning management (failed payments)
   - Proration handling
   - Trial period settings
   - Cancellation flow

## Templates to Create

```
pricing-payments/
├── stripe-webhook-handlers.md (technical spec)
├── pricing-validation-survey.md (user research)
├── payment-flow-diagram.png
└── invoice-template.html
```

---

**Start Here:** Research competitor pricing, validate with 10+ beta users
