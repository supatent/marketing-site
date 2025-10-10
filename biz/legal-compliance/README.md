# Legal & Compliance

**Checkpoint Section:** 2. Legal & Compliance
**Owner:** Legal Team / Compliance Officer
**Deadline:** October 10, 2025

## Overview

This folder contains all legal documentation, compliance research, and regulatory requirements for VMS/Vanua launch.

## Critical Deliverables

### 1. Privacy Policy (Datenschutzerklärung)
**Status:** ⏳ Not Started
**Languages Required:** EN, DE
**GDPR Compliance:** Mandatory

**Key Topics to Cover:**
- [ ] What data we collect (emails, content, files, usage analytics)
- [ ] Why we collect it (service delivery, billing, support)
- [ ] How long we store it (retention policy)
- [ ] Who we share it with (Supabase, hosting, analytics)
- [ ] User rights (access, deletion, portability, objection)
- [ ] Data processor agreements (DPA with Supabase)
- [ ] Contact for data protection inquiries
- [ ] Cookie policy integration

**Research Sources:**
- GDPR official text: https://gdpr-info.eu/
- Supabase DPA: https://supabase.com/dpa
- Privacy policy generators (validate, don't copy):
  - https://www.privacypolicies.com/
  - https://www.iubenda.com/

**Template Structure:**
```
1. Introduction
2. Data Controller Information
3. Data We Collect
4. Legal Basis for Processing
5. Purpose of Processing
6. Data Storage and Retention
7. Third-Party Services
8. User Rights (GDPR Art. 15-22)
9. Data Security Measures
10. Changes to Privacy Policy
11. Contact Information
```

### 2. Terms of Service (AGB)
**Status:** ⏳ Not Started
**Languages Required:** EN, DE

**Key Topics to Cover:**
- [ ] Service description and scope
- [ ] User obligations and acceptable use policy
- [ ] Payment terms, refunds, cancellation
- [ ] Intellectual property (content ownership, our IP)
- [ ] Liability limitations (what we're responsible for)
- [ ] Data backup responsibilities
- [ ] Service level agreement (SLA) - if applicable
- [ ] Termination conditions
- [ ] Dispute resolution and governing law
- [ ] Changes to terms notification

**Special Considerations:**
- **AI-Generated Content:** Clarify ownership and responsibility
- **MCP Integration:** Third-party AI usage disclaimers
- **Storage Limits:** What happens when users exceed quotas
- **Data Export:** User's right to export their content

### 3. Impressum (Legal Notice)
**Status:** ⏳ Not Started
**Required For:** German/EU compliance (mandatory)

**Required Information:**
- [ ] Company legal name and form (e.g., "VMS GmbH")
- [ ] Registered business address
- [ ] Email address (for legal inquiries)
- [ ] Phone number (optional but recommended)
- [ ] Company registration number (Handelsregister)
- [ ] VAT ID (if applicable)
- [ ] Responsible for content (Verantwortlich für den Inhalt)
- [ ] Professional association (if applicable)
- [ ] Supervisory authority (if applicable)

**Placement:** Footer of all pages, easily accessible

### 4. Cookie Consent Banner
**Status:** ⏳ Not Started
**GDPR Requirement:** Mandatory opt-in

**Cookie Categories:**
- **Essential:** Authentication, session management (no consent needed)
- **Analytics:** Usage tracking (Plausible, Google Analytics) - requires consent
- **Marketing:** Advertising, retargeting - requires consent

**Implementation:**
- [ ] Cookie consent library (CookieConsent, Osano, Cookiebot)
- [ ] Granular consent (not just "Accept All")
- [ ] Cookie settings page (users can change preferences)
- [ ] Respect Do Not Track (DNT) header
- [ ] Block third-party cookies until consent given

**Tools to Consider:**
- **Open Source:** https://github.com/orestbida/cookieconsent
- **Commercial:** https://www.cookiebot.com/ (auto-scans cookies)

### 5. Data Processing Agreement (DPA)
**Status:** ⏳ Not Started
**Required For:** GDPR compliance with third parties

**Key Partnerships Requiring DPA:**
- [ ] Supabase (database + auth + storage)
- [ ] Hosting provider (Vercel/Railway/AWS)
- [ ] Payment processor (Stripe)
- [ ] Analytics provider (if applicable)
- [ ] Email service (if using external service)
- [ ] Support ticketing system

**Action Items:**
1. Request DPA from each vendor
2. Review and sign DPAs
3. Store executed DPAs in this folder
4. List processors in Privacy Policy

## Research & Resources

### GDPR Articles (Most Relevant)

- **Art. 6:** Legal basis for processing
- **Art. 7:** Conditions for consent
- **Art. 12-14:** Information to be provided to data subjects
- **Art. 15-22:** Data subject rights (access, erasure, portability)
- **Art. 25:** Data protection by design and default
- **Art. 28:** Processor obligations (our vendors)
- **Art. 32:** Security of processing
- **Art. 33-34:** Data breach notification

### Swiss Data Protection (if applicable)

If serving Swiss customers:
- Swiss Federal Act on Data Protection (FADP)
- Similar to GDPR but with differences
- May require separate Swiss privacy policy

### Best Practices

1. **Be Transparent:** Clear, plain language (no legalese if possible)
2. **Be Specific:** Don't use generic templates without customization
3. **Be Accurate:** Only list data/purposes you actually use
4. **Be Updated:** Review every 6-12 months, update as needed
5. **Be Accessible:** Footer links, easy to find, mobile-friendly

## Validation Checklist

Before going live (Oct 10):

- [ ] Privacy Policy reviewed by legal counsel
- [ ] Terms of Service reviewed by legal counsel
- [ ] Impressum contains all required information
- [ ] Cookie banner tested (blocks tracking before consent)
- [ ] All DPAs signed and filed
- [ ] Documents available in EN and DE
- [ ] Footer links working on all pages
- [ ] Privacy policy linked in signup flow
- [ ] ToS acceptance required on signup
- [ ] Data deletion process documented and tested

## Common Mistakes to Avoid

❌ Using generic privacy policy without customization
❌ Forgetting to list all third-party processors
❌ Not providing mechanism for data export
❌ Missing contact information for data protection inquiries
❌ Vague language about data retention periods
❌ Not translating to German (required for EU/German users)
❌ Buried legal links (should be prominent in footer)
❌ No cookie consent mechanism (GDPR violation)

## Templates (To Be Created)

```
legal-compliance/
├── templates/
│   ├── privacy-policy-template-en.md
│   ├── privacy-policy-template-de.md
│   ├── terms-of-service-template-en.md
│   ├── terms-of-service-template-de.md
│   ├── impressum-template-de.md
│   └── cookie-consent-config.json
├── research/
│   ├── gdpr-key-articles.md
│   ├── supabase-dpa-review.md
│   └── competitor-privacy-policies.md
└── dpas/
    ├── supabase-dpa-signed.pdf
    ├── stripe-dpa-signed.pdf
    └── hosting-dpa-signed.pdf
```

## Knowledge Aggregation Strategy

### Week 1 (Oct 4-6): Research
1. Review GDPR articles 6, 12-22, 28, 32
2. Analyze 5 competitor privacy policies
3. Identify all third-party data processors
4. Document data we collect and why
5. Research cookie consent libraries

### Week 2 (Oct 7-10): Draft & Review
1. Draft Privacy Policy (EN) using template
2. Translate to German (professional translator)
3. Draft Terms of Service (EN + DE)
4. Create Impressum with company details
5. Legal counsel review (deadline Oct 9)
6. Implement cookie consent banner

### Week 3 (Oct 11-15): Implementation
1. Add footer links to all pages
2. Integrate cookie consent
3. Add ToS acceptance to signup flow
4. Test data deletion workflow
5. Final legal review
6. Go live

## Questions for Legal Counsel

1. Do we need separate privacy policies for different regions (EU vs US)?
2. What is our data breach notification timeline (Art. 33: 72 hours)?
3. Do we need a Data Protection Officer (DPO)? (GDPR Art. 37)
4. Are our data retention periods compliant?
5. Is our consent mechanism GDPR-compliant?
6. Do we need age verification (under 16 requires parental consent)?
7. What's our liability cap in Terms of Service?
8. Do we need cyber insurance?

---

## 📄 Implementation & Analysis Documentation

### Main Documents
- **`LEGAL_QUESTIONNAIRE.md`** - 101 questions for legal specialist
- **`LEGAL_ANALYSIS_DETAILED.md`** - ⭐ Comprehensive answers to all questions with references
- **`LEGAL_ADVISOR_RESPONSE.md`** - Executive summary and timeline
- **`IMPLEMENTATION_SUMMARY.md`** - Complete implementation checklist

### Implementation Guides
- **`ui-implementation-guide.md`** - Frontend components with code
- **`cookie-consent-implementation.md`** - Cookie banner implementation
- **`compliance-database-schema.sql`** - Database schema for tracking

### Email Templates
- **`email-templates/data-export-email.html`**
- **`email-templates/breach-notification-email.html`**
- **`email-templates/account-deletion-confirmation.html`**

### Key Findings from Legal Analysis
- ✅ **October 20 launch is feasible** with critical items addressed
- ✅ **No DPO required** at launch (<10,000 users)
- ✅ **GDPR policy covers Swiss FADP** requirements
- ✅ **Simple age verification** (checkbox) sufficient
- ⚠️ **Must sign DPAs** before launch (critical blocker)
- ⚠️ **Cookie consent must block** non-essential tracking
- ⚠️ **72-hour breach notification** procedure required

**Estimated Legal Costs:** €6,000 - €15,000 for launch compliance

---

**Last Updated:** October 4, 2025
**Next Review:** October 6, 2025 (legal counsel consultation)
