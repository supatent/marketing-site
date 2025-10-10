# DPA Signing Guide for VMS/Vanua CMS

**Created:** October 4, 2025
**Purpose:** Step-by-step guide to sign Data Processing Agreements with all third-party processors
**Deadline:** October 13, 2025 (before Oct 20 launch)

---

## Overview

GDPR requires signed Data Processing Agreements (DPAs) with all third-party processors before launch. This guide provides the most elegant and efficient process for each service VMS uses.

---

## 🎯 DPA Status Tracker

| Service | Type | Status | Signing Method | Deadline | Notes |
|---------|------|--------|----------------|----------|-------|
| **Supabase** | Database, Auth, Storage | ⏳ Not Started | Self-service (Dashboard) | Oct 10 | PandaDoc signature required |
| **Stripe** | Payments | ✅ Auto-signed | Automatic (via ToS) | N/A | DPA included in Service Agreement |
| **Vercel/Railway** | Hosting | ⏳ Not Started | Contact support | Oct 12 | Request via support ticket |
| **Sentry** | Error tracking | ⏳ Not Started | Enterprise dashboard | Oct 12 | Available in account settings |
| **Support Tool** | TBD | ⏳ Pending | TBD | Oct 14 | After tool selection (Crisp/Intercom) |

---

## 1. Supabase DPA (Database, Auth, Storage)

### ✅ Most Elegant Process: Self-Service via Dashboard

**Steps:**

1. **Review the DPA Template**
   - Download and review: https://supabase.com/downloads/docs/Supabase+DPA+250314.pdf
   - Ensure it covers: GDPR, Swiss Data Protection Laws, Standard Contractual Clauses

2. **Access Your Supabase Dashboard**
   - Login to your Supabase project: https://supabase.com/dashboard
   - Navigate to: **Settings** → **Legal Documents** → **Data Processing Agreement**

3. **Complete the PandaDoc Document**
   - Click "Request DPA" or "Sign DPA" button
   - Fill in required organizational details:
     - Company legal name
     - Registered address
     - Contact person name and email
     - VAT ID (if applicable)
     - Company registration number
   - Review the pre-filled DPA terms

4. **Sign Electronically**
   - E-sign the document via PandaDoc
   - Download the executed DPA for your records

5. **Confirm EU Region**
   - Ensure your Supabase project uses EU region (e.g., `eu-west-1`)
   - This keeps data within European jurisdiction for GDPR compliance

**Timeline:** 15-30 minutes
**Status:** ⏳ Action Required
**Deadline:** October 10, 2025

**Resources:**
- DPA Page: https://supabase.com/legal/dpa
- Dashboard: https://supabase.com/dashboard
- Support: https://supabase.com/support

---

## 2. Stripe DPA (Payment Processing)

### ✅ Most Elegant: Automatically Signed (No Action Needed!)

**How It Works:**

Stripe's DPA is **automatically executed** when you use their services. The DPA forms part of the Stripe Services Agreement (SSA), meaning:

- ✅ **No separate signature required**
- ✅ **DPA becomes effective upon service use**
- ✅ **Includes Standard Contractual Clauses for EU transfers**
- ✅ **EU-U.S. Data Privacy Framework certified**

**What You Need to Do:**

1. **Verify Your Account Entity**
   - EU/UK accounts: DPA with **Stripe Payments Europe, Limited** (GDPR-compliant)
   - US accounts: DPA with **Stripe, Inc.** (includes SCCs for EU data transfers)

2. **Review the DPA (Optional but Recommended)**
   - Access DPA: https://stripe.com/legal/dpa
   - FAQ: https://stripe.com/legal/dpa/faqs
   - Confirm it covers your compliance needs

3. **Document for Compliance Records**
   - Save a copy of Stripe's DPA from https://stripe.com/legal/dpa
   - Note the effective date (date you started using Stripe)
   - Include in your DPA register: "Stripe DPA - automatically executed via Services Agreement"

**Timeline:** 5 minutes (documentation only)
**Status:** ✅ No Action Required (Auto-signed)
**Compliance Date:** Date Stripe account was created

**Resources:**
- DPA: https://stripe.com/legal/dpa
- FAQ: https://stripe.com/legal/dpa/faqs
- Privacy Center: https://stripe.com/legal/privacy-center

---

## 3. Vercel/Railway DPA (Hosting)

### ✅ Most Elegant Process: Support Request

**Vercel DPA Process:**

1. **Check if Available in Dashboard**
   - Login to Vercel dashboard
   - Navigate to: **Settings** → **Legal** or **Compliance**
   - Some enterprise accounts have self-service DPA

2. **Request via Support (Most Common)**
   - Open support ticket: https://vercel.com/support
   - Subject: "Request Data Processing Agreement (DPA) for GDPR Compliance"
   - Include:
     - Your company name and Vercel account/team ID
     - Use case: "We need a signed DPA for GDPR compliance before our October 20, 2025 production launch"
     - Contact email for DPA signing

3. **Review and Sign**
   - Vercel will send DPA via DocuSign or email
   - Review terms (ensure GDPR, SCCs included)
   - Sign electronically

**Railway DPA Process:**

1. **Contact Railway Support**
   - Email: team@railway.app
   - Subject: "Request Data Processing Agreement for GDPR Compliance"
   - Include same details as above

2. **Alternative: Check for Self-Service**
   - Railway may have DPA available in: **Account Settings** → **Legal**

**Timeline:** 2-5 business days
**Status:** ⏳ Action Required
**Deadline:** October 12, 2025

---

## 4. Sentry DPA (Error Tracking)

### ✅ Most Elegant Process: Enterprise Dashboard

**Steps:**

1. **Access Sentry Organization Settings**
   - Login to Sentry: https://sentry.io
   - Navigate to: **Settings** → **Legal & Privacy** → **Data Processing Addendum**

2. **Self-Service DPA (For Paid Plans)**
   - Click "Generate DPA" or "Request DPA"
   - Fill in organization details
   - Sign electronically via Sentry's platform

3. **Alternative: Contact Support (Free/Developer Plans)**
   - If self-service not available, contact support: https://sentry.io/support
   - Request DPA for GDPR compliance
   - Provide organization details

4. **Verify Data Residency**
   - Ensure EU data residency if storing EU user data
   - Check: **Settings** → **General** → **Data Location**

**Timeline:** 15-30 minutes (self-service) or 2-3 days (support request)
**Status:** ⏳ Action Required
**Deadline:** October 12, 2025

---

## 5. Support Tool DPA (Crisp/Intercom - TBD)

### ✅ Process: Depends on Tool Selected

**Crisp DPA:**
- Available at: https://crisp.chat/en/privacy/gdpr/
- Self-service DPA in dashboard: **Settings** → **Legal** → **DPA**
- Usually includes pre-signed DPA with Standard Contractual Clauses

**Intercom DPA:**
- Available at: https://www.intercom.com/legal/dpa
- Request via: **Settings** → **Data & Privacy** → **Request DPA**
- DocuSign signature required

**Timeline:** 1-3 days after tool selection
**Status:** ⏳ Pending tool selection (Oct 6)
**Deadline:** October 14, 2025

---

## 📋 DPA Documentation Checklist

For each signed DPA, maintain the following records:

### DPA Register Template

Create a spreadsheet or document with:

| Processor | Service Type | DPA Signed Date | DPA Document Link | Contact Person | Review Date |
|-----------|--------------|-----------------|-------------------|----------------|-------------|
| Supabase | Database, Auth, Storage | 2025-10-10 | /dpas/supabase-dpa-signed.pdf | legal@supabase.com | 2026-10-10 |
| Stripe | Payments | Auto-signed (2025-09-15) | https://stripe.com/legal/dpa | N/A | 2026-09-15 |
| Vercel | Hosting | 2025-10-12 | /dpas/vercel-dpa-signed.pdf | support@vercel.com | 2026-10-12 |
| Sentry | Error Tracking | 2025-10-12 | /dpas/sentry-dpa-signed.pdf | support@sentry.io | 2026-10-12 |
| Crisp | Support | 2025-10-14 | /dpas/crisp-dpa-signed.pdf | gdpr@crisp.chat | 2026-10-14 |

### File Storage Structure

```
legal-compliance/
└── dpas/
    ├── DPA_REGISTER.md (master list)
    ├── supabase-dpa-signed.pdf
    ├── stripe-dpa-reference.pdf (from stripe.com/legal/dpa)
    ├── vercel-dpa-signed.pdf
    ├── sentry-dpa-signed.pdf
    └── crisp-dpa-signed.pdf
```

---

## 🚀 Action Plan: DPA Signing Timeline

### Week 1 (Oct 4-6)
- [ ] **Oct 4:** Review this guide with team
- [ ] **Oct 5:** Sign Supabase DPA via dashboard
- [ ] **Oct 6:** Document Stripe auto-signed DPA
- [ ] **Oct 6:** Request Vercel/Railway DPA via support

### Week 2 (Oct 7-13)
- [ ] **Oct 7:** Follow up on Vercel/Railway DPA requests
- [ ] **Oct 8:** Sign Sentry DPA via dashboard
- [ ] **Oct 10:** Verify all DPAs received and signed
- [ ] **Oct 12:** Select support tool (Crisp/Intercom)
- [ ] **Oct 13:** Request support tool DPA

### Week 3 (Oct 14-19)
- [ ] **Oct 14:** Sign support tool DPA
- [ ] **Oct 15:** Update DPA register with all processors
- [ ] **Oct 16:** List all processors in Privacy Policy
- [ ] **Oct 18:** Final DPA compliance check
- [ ] **Oct 19:** File all signed DPAs in secure storage

---

## 📝 Privacy Policy Integration

Once all DPAs are signed, update your Privacy Policy with processor list:

```markdown
## Third-Party Service Providers

We work with the following third-party processors who have signed Data Processing Agreements (DPAs) with us:

- **Supabase** (Supabase, Inc.) - Database, authentication, and file storage
  - Data Processing Agreement: Signed October 10, 2025
  - Data location: EU (Frankfurt)

- **Stripe** (Stripe Payments Europe, Limited) - Payment processing
  - Data Processing Agreement: Automatically executed via Services Agreement
  - Data location: EU and US (with Standard Contractual Clauses)

- **Vercel** (Vercel Inc.) - Website hosting and CDN
  - Data Processing Agreement: Signed October 12, 2025
  - Data location: EU regions

- **Sentry** (Functional Software, Inc.) - Error tracking and monitoring
  - Data Processing Agreement: Signed October 12, 2025
  - Data location: EU (optional)

- **Crisp** (Crisp IM SARL) - Customer support chat
  - Data Processing Agreement: Signed October 14, 2025
  - Data location: EU (Paris)

All processors are GDPR-compliant and have committed to:
- Processing data only on our instructions
- Implementing appropriate security measures
- Assisting with data subject requests
- Notifying us of any data breaches
```

---

## ❓ FAQ

### Q1: What if a processor doesn't offer a DPA?
**A:** Under GDPR, any processor handling EU personal data must sign a DPA. If they refuse, you cannot use their service for EU users. Consider alternatives or negotiate directly with their legal team.

### Q2: Can we use the same DPA for multiple projects?
**A:** Usually yes, but it depends on how the DPA is structured. Most DPAs cover "all services under this account." If you have separate legal entities, you may need separate DPAs.

### Q3: How often do DPAs need to be renewed?
**A:** Most DPAs are perpetual (remain valid as long as you use the service). Review annually to ensure terms haven't changed. Some processors may require re-signing if their DPA template updates.

### Q4: What if we miss the October 13 deadline?
**A:** You **cannot launch without DPAs** for services processing EU personal data. This is a GDPR requirement. Delay launch until all DPAs are signed.

### Q5: Do we need DPAs for analytics tools like Plausible?
**A:** If Plausible is truly anonymous (no IP tracking, no cookies, no user identification), technically no DPA is required. However, it's best practice to have one anyway. Check if Plausible offers a DPA.

---

## ✅ Completion Checklist

Before October 20 launch, confirm:

- [ ] All DPAs signed and documented
- [ ] DPA register created and up-to-date
- [ ] Signed DPAs stored securely (encrypted folder or secure cloud storage)
- [ ] Privacy Policy lists all processors with DPA references
- [ ] Team aware of processor relationships
- [ ] Process documented for adding new processors in future

---

## 🔒 Best Practices

1. **Central DPA Storage:** Keep all DPAs in encrypted cloud storage (1Password, Vault, or secure S3 bucket)
2. **Annual Review:** Review all DPAs annually (set calendar reminder for October 2026)
3. **New Processor Process:** Before adding any new tool/service, verify they offer GDPR-compliant DPA
4. **Subprocessor Changes:** Some DPAs require notification of subprocessor changes - monitor vendor updates
5. **Backup Copies:** Keep backup copies of all signed DPAs in multiple locations

---

**Document Status:** Action Guide Ready
**Owner:** Legal/Compliance Team
**Next Action:** Begin Supabase DPA signing (Oct 5)
**Deadline:** All DPAs signed by October 13, 2025
