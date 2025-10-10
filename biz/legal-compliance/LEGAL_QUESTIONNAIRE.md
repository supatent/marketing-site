# Legal Questionnaire for VMS/Vanua CMS
**Prepared for:** Legal Specialist Review
**Date:** October 4, 2025
**Purpose:** Production deployment compliance validation
**Deadline for Responses:** October 6, 2025

---

## About This Document

This questionnaire contains all critical legal and compliance questions that need answers before our October 20, 2025 production launch. Please provide guidance on each section, highlighting any critical blockers or areas requiring immediate attention.

---

## 1. Privacy Policy & GDPR Compliance

### 1.1 Data Collection & Processing
- **Q1:** What is the minimum information required in a GDPR-compliant privacy policy for a SaaS CMS platform?
- **Q2:** We collect: emails, content (text/images/files), usage analytics, payment info (via Stripe). Do we need separate legal basis documentation for each data type?
- **Q3:** How specific do we need to be about data retention periods? Can we say "as long as account is active" or must we specify exact timeframes?
- **Q4:** We use AI to process user content (translation, SEO optimization). What specific disclosures are required for AI-processed data?
- **Q5:** Users can generate content using AI agents. Who legally owns this AI-generated content - the user or us? What disclaimers do we need?

### 1.2 User Rights (GDPR Articles 15-22)
- **Q6:** What is our legal obligation for responding to data access requests (Art. 15)? What format must we provide the data in?
- **Q7:** For data portability (Art. 20), is exporting content as JSON files sufficient, or do we need specific formats?
- **Q8:** For the "right to be forgotten" (Art. 17), can we retain minimal data for legal/tax purposes? If so, for how long?
- **Q9:** If a user deletes their account but their content is cached on CDN, how quickly must we purge it to be compliant?

### 1.3 Third-Party Processors
We use these services (all process user data):
- **Supabase** (database, auth, storage) - US company, EU region
- **Vercel/Railway** (hosting) - US companies
- **Stripe** (payments) - US company, EU processing
- **Sentry/LogRocket** (monitoring, potential PII in logs)
- **Support tool** (TBD: Crisp/Intercom) - chat logs

- **Q10:** Do we need signed Data Processing Agreements (DPAs) with all of them before launch?
- **Q11:** Supabase provides a DPA template. Is signing their template sufficient or do we need our own legal review?
- **Q12:** If a processor is US-based but uses EU data centers, what additional safeguards (SCCs, adequacy decisions) are required?
- **Q13:** Must we list every processor in our privacy policy, or can we say "third-party analytics tools" generically?

### 1.4 Cross-Border Data Transfers
- **Q14:** Our users are primarily in EU/Switzerland. Our infrastructure is EU-based but some processors (Stripe, Vercel) are US companies. What Standard Contractual Clauses (SCCs) do we need?
- **Q15:** Do we need separate privacy policies for EU vs US vs Swiss users, or can one global policy cover all regions?
- **Q16:** If we expand to serve US customers later, what changes to our privacy policy/ToS are required?

### 1.5 Cookie Consent
- **Q17:** Which cookies require explicit consent vs. which are "strictly necessary"? Our cookies:
  - Authentication session (Supabase)
  - User preferences (theme, language)
  - Analytics (Plausible or Google Analytics - TBD)
  - Error tracking (Sentry session replay)

- **Q18:** Is a banner with "Accept All" + "Reject All" sufficient, or must we offer granular consent per cookie type?
- **Q19:** Can we use analytics before consent if we use privacy-friendly tools like Plausible (no personal data)?
- **Q20:** If a user clicks "Reject All," can we still remember their rejection choice via a cookie?

---

## 2. Terms of Service

### 2.1 Service Scope & Liability
- **Q21:** What liability limitations are legally enforceable in EU vs US jurisdictions? Can we disclaim all liability for AI-generated content accuracy?
- **Q22:** We offer version control/rollback for content. If a user loses data due to our bug, what is our legal liability? Should we cap damages?
- **Q23:** We store user files (images, documents) up to 50MB. If a file is lost, corrupted, or CDN fails, what disclaimers protect us?
- **Q24:** Our SLA target is 99.9% uptime. What happens legally if we miss this? Do we need service credits or refund clauses?

### 2.2 Intellectual Property
- **Q25:** User uploads content and files. Do we need explicit IP assignment clauses stating they retain ownership?
- **Q26:** We use AI to translate content. If AI translation infringes copyright (e.g., translates copyrighted text), who is liable - us or the user?
- **Q27:** Users can publish content via our API to their websites. If that content is illegal (defamatory, infringing), are we liable as a platform provider?
- **Q28:** We provide a TypeScript SDK and MCP server (Model Context Protocol) for AI agents. What licenses should we use (MIT, Apache 2.0)? Any patent concerns?

### 2.3 Payment Terms
- **Q29:** We use Stripe for billing. Our tiers: Free, Pro ($29/mo), Team ($99/mo), Enterprise (custom). What refund policy is legally required vs. recommended?
- **Q30:** If a user exceeds their storage/item quota, can we auto-charge them or must we get explicit consent first?
- **Q31:** For annual plans, if we increase prices, can we apply new pricing at renewal or must we honor original price forever?
- **Q32:** EU customers pay with VAT. Who is responsible for VAT compliance - us or Stripe? Do we need VAT registration in every EU country?

### 2.4 Account Termination
- **Q33:** Can we terminate accounts for ToS violations without notice, or must we provide warning/appeal process?
- **Q34:** If we shut down the service entirely (worst case), how much notice must we give users to export their data?
- **Q35:** For "free tier" users, can we delete inactive accounts after 12 months, or do we need explicit consent/notice?

---

## 3. Impressum (Legal Notice)

### 3.1 German/EU Requirements
- **Q36:** We're incorporated as [COMPANY ENTITY - TBD]. What exact information is legally required in our Impressum?
  - Company legal name and form?
  - Registered address?
  - Company registration number (Handelsregister)?
  - VAT ID?
  - Managing directors' names?

- **Q37:** Must the Impressum be on every page or just accessible from footer link?
- **Q38:** If we rebrand (e.g., "VMS" → "Vanua"), when must we update legal entity name in Impressum?
- **Q39:** Do we need separate legal notices for Switzerland (Impressum equivalent)?

---

## 4. Compliance & Regulatory

### 4.1 Data Protection Officer (DPO)
- **Q40:** Are we required to appoint a Data Protection Officer under GDPR Article 37? Our profile:
  - SaaS CMS platform
  - Likely <10,000 users at launch
  - Process content, files, emails, usage analytics
  - No "large scale monitoring" or sensitive data (health, political)

- **Q41:** If we don't need a DPO now, at what scale/criteria would we need one?

### 4.2 Data Breach Notification
- **Q42:** GDPR Article 33 requires breach notification within 72 hours. What constitutes a "breach" we must report?
  - Database compromise?
  - Accidental public S3 bucket?
  - Employee accessing user data without reason?

- **Q43:** What is the exact process: notify supervisory authority first, then users? What information must we include?
- **Q44:** Do we need cyber insurance to cover breach notification costs and potential fines?

### 4.3 Age Verification
- **Q45:** GDPR requires parental consent for users under 16. Must we implement age verification on signup?
- **Q46:** Can we simply require users to confirm they're 16+ via checkbox, or do we need stricter verification?

### 4.4 Accessibility & Inclusion
- **Q47:** Are there legal requirements (EU Accessibility Act, ADA) for our CMS interface to be accessible to disabled users?
- **Q48:** Our content is multi-language (EN, DE, ES, IT). Are we required to provide accessibility in all languages?

---

## 5. Content Moderation & Platform Liability

### 5.1 User-Generated Content
- **Q49:** Users upload text, images, files. Are we liable for illegal content (copyright infringement, hate speech) under EU law (DSA - Digital Services Act)?
- **Q50:** Must we implement content moderation/filtering before launch? Or can we rely on user reports + reactive takedown?
- **Q51:** If we receive a DMCA takedown notice (or EU equivalent), what is our legal process and timeline to remove content?

### 5.2 AI-Generated Content
- **Q52:** We offer AI translation and SEO optimization. If AI generates defamatory, biased, or factually incorrect content, who is liable?
- **Q53:** EU AI Act is coming. Does our use of AI for content processing require any specific compliance or disclosures now?
- **Q54:** If a user publishes AI-generated content to their website via our API and it causes harm, can we be held liable?

---

## 6. Marketing & Communications

### 6.1 Email Marketing
- **Q55:** We'll send product updates, feature announcements, and marketing emails. What consent is required under GDPR + ePrivacy Directive?
- **Q56:** Can we auto-enroll users in product updates (with opt-out), or must they explicitly opt-in?
- **Q57:** What must be included in every marketing email (unsubscribe link, company address, etc.)?

### 6.2 Launch Communications
- **Q58:** We're planning Product Hunt launch, blog posts, social media. Any legal restrictions on claims we make (e.g., "most secure CMS")?
- **Q59:** We'll use screenshots/testimonials from beta users. Do we need written consent for each?
- **Q60:** Can we say "GDPR-compliant" in marketing if we've followed best practices but haven't had external audit?

---

## 7. Business Structure & Tax

### 7.1 Corporate Entity
- **Q61:** We need to finalize company structure. Recommendations for:
  - GmbH (Germany)
  - AG (Switzerland)
  - US LLC with EU subsidiary
  - Other?

- **Q62:** If we incorporate in one country but have users globally, what are tax implications (corporate tax, VAT, sales tax)?

### 7.2 Tax Compliance
- **Q63:** For B2B sales in EU, do we charge VAT? What about reverse charge mechanism?
- **Q64:** For B2C sales, must we register for VAT in every EU country where we have customers, or is there a threshold?
- **Q65:** We use Stripe Tax for automatic tax calculation. Does this fulfill our legal obligations or do we need separate tax advisor?

---

## 8. Open Source & Licensing

### 8.1 Our Code & SDKs
- **Q66:** We provide:
  - TypeScript SDK (published to npm)
  - MCP Server (FastMCP-based, for AI agents)
  - Code examples in docs

  What license should we use (MIT, Apache 2.0, proprietary)? Any patent/liability concerns?

### 8.2 Third-Party Dependencies
- **Q67:** Our stack uses open source libraries (Vue, FastAPI, Supabase SDK, etc.). Do we need to publish attribution/license notices?
- **Q68:** If a dependency has GPL/AGPL license, does that affect our ability to offer VMS as proprietary SaaS?

---

## 9. Contracts & Agreements

### 9.1 Customer Contracts
- **Q69:** For enterprise customers, should we offer:
  - Custom ToS/MSA (Master Service Agreement)?
  - Data Processing Addendum (DPA)?
  - SLA guarantees?
  - On-premise deployment option (legal implications)?

### 9.2 Partner Agreements
- **Q70:** We might partner with agencies/resellers who sell VMS to their clients. What legal framework:
  - Reseller agreement?
  - Revenue share terms?
  - Support obligations?
  - Data handling responsibilities?

---

## 10. Risk Assessment & Insurance

### 10.1 Legal Risks
- **Q71:** What are the top 3 legal risks for our business model? (Prioritize for immediate mitigation)
- **Q72:** What insurance do we need:
  - Cyber liability insurance?
  - Errors & omissions (E&O)?
  - General liability?
  - Professional indemnity?

### 10.2 Dispute Resolution
- **Q73:** Our ToS should specify governing law and dispute resolution. Recommendations for:
  - Governing law (Swiss, German, Irish, or user's local law)?
  - Dispute resolution (arbitration vs. courts)?
  - Jurisdiction for international users?

---

## 11. Timeline & Prioritization

### 11.1 Critical Path
- **Q74:** Of all the above, which items are **blockers** for October 20 launch? (Must-haves)
- **Q75:** Which items can be addressed post-launch within 30-60 days? (Nice-to-haves)
- **Q76:** What is the minimum viable legal foundation to launch without significant risk?

### 11.2 Ongoing Compliance
- **Q77:** What legal reviews should be recurring (quarterly, annually)?
- **Q78:** Do we need a compliance calendar (e.g., annual privacy policy review, DPA renewals)?

---

## 12. Product-Specific Legal Questions

### 12.1 Version Control & Rollback
- **Q79:** We offer git-style version control for content. If a user publishes defamatory content, then rolls back, are we required to retain the deleted version for law enforcement?
- **Q80:** What is our data retention policy for deleted/rolled-back content? (GDPR vs. legal hold requirements)

### 12.2 Multi-Language Content
- **Q81:** We auto-translate content using AI. If a translation is inaccurate or offensive in target language, what disclaimers protect us?
- **Q82:** Users can publish multi-language content. Are we liable for content in languages we don't speak/moderate?

### 12.3 File Storage & CDN
- **Q83:** We store user files (images, PDFs) and serve them via CDN. If a user uploads copyrighted material, what is our safe harbor protection?
- **Q84:** Can we scan uploaded files for malware/illegal content, or does that violate user privacy expectations?

### 12.4 API & MCP Integration
- **Q85:** We provide public API and MCP server for AI agents (Claude Desktop, etc.). If someone builds a malicious tool using our API, are we liable?
- **Q86:** Our API has rate limits. If we block a user for exceeding limits and they lose business, can they sue us?

---

## 13. Questions for Specific Jurisdictions

### 13.1 Germany
- **Q87:** Anything specific for German users beyond GDPR (Telemediengesetz, NetzDG)?
- **Q88:** German "Impressum" requirements - covered in Q36-39, any additional nuances?

### 13.2 Switzerland
- **Q89:** Swiss FADP (Federal Act on Data Protection) vs. GDPR - key differences?
- **Q90:** Do Swiss users need separate privacy policy or can we use GDPR-compliant one?

### 13.3 United States
- **Q91:** If we serve US customers, what state privacy laws apply (CCPA, CPRA, Virginia CDPA)?
- **Q92:** Do we need separate US Terms of Service (different liability caps, arbitration clauses)?

---

## 14. Documentation & Templates

### 14.1 What We Need From You
- **Q93:** Can you provide/review our draft templates for:
  - Privacy Policy (EN + DE)
  - Terms of Service (EN + DE)
  - Impressum (DE)
  - Cookie Consent text
  - Data Processing Agreement (customer-facing)

- **Q94:** Should we use lawyer-reviewed templates or hire you to draft custom documents?

### 14.2 Approval Process
- **Q95:** What is your review turnaround time for legal documents (draft → final)?
- **Q96:** Do you offer ongoing legal support retainer, or one-time project engagement?

---

## 15. Final Critical Questions

### 15.1 Go/No-Go Decision
- **Q97:** Based on our current state, is October 20 launch legally feasible, or should we delay?
- **Q98:** What is the absolute minimum set of legal documents to launch (even if imperfect):
  - [ ] Privacy Policy?
  - [ ] Terms of Service?
  - [ ] Cookie Consent?
  - [ ] Impressum?
  - [ ] DPAs signed?

- **Q99:** If we launch with "beta" or "early access" disclaimer, does that reduce legal risk?

### 15.2 Budget & Resources
- **Q100:** What is the estimated budget for legal setup (document drafting, DPA reviews, ongoing compliance)?
- **Q101:** Do we need in-house legal counsel, or is external legal advisor sufficient for a SaaS startup?

---

## Next Steps

Once you've reviewed this questionnaire:

1. **Priority Flagging**: Mark questions 1-5 (critical), 6-10 (important), 11-15 (nice-to-have)
2. **Blocker Identification**: Highlight any items that would prevent Oct 20 launch
3. **Action Items**: Provide specific next steps for each critical area
4. **Timeline**: Estimated time to resolve each priority item
5. **Cost Estimate**: Legal fees for document drafting, reviews, ongoing support

**Please return responses by:** October 6, 2025 (2 days)
**Contact for follow-up:** [YOUR EMAIL/PHONE]

---

## Appendix: Project Context

### What is VMS/Vanua?
- **Product**: AI-powered headless CMS with version control, multi-language support, and API-first architecture
- **Target Users**: Developers, content teams, AI-forward companies
- **Key Features**:
  - Git-style content versioning
  - One-click AI translation
  - Public API + TypeScript SDK
  - MCP server for AI agents
  - File storage with CDN
  - Multi-tenant with RLS security

### Tech Stack
- **Backend**: FastAPI (Python), Supabase (PostgreSQL)
- **Frontend**: Vue 3, TypeScript, Tailwind
- **Infrastructure**: Vercel/Railway (hosting), Stripe (payments)
- **Data Storage**: Supabase (database), S3-compatible bucket (files)

### Business Model
- **Free Tier**: Hobbyists (1 project, 1GB storage)
- **Pro Tier**: $29/month (5 projects, 10GB)
- **Team Tier**: $99/month (20 projects, 100GB)
- **Enterprise**: Custom pricing (unlimited, SSO, on-prem)

### Launch Plan
- **Beta Testing**: October 4-15 (20+ users)
- **Production Launch**: October 20, 2025
- **Go-to-Market**: Product Hunt, technical blog posts, developer communities

---

**Document Version:** 1.0
**Last Updated:** October 4, 2025
**Prepared By:** VMS Product Team
**Review Deadline:** October 6, 2025
