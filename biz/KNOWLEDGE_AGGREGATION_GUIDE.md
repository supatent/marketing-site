# Knowledge Aggregation Guide

**Created:** October 4, 2025
**Purpose:** How to systematically gather, organize, and act on information for the October 20 checkpoint

---

## Folder Structure Overview

```
biz/
├── README.md                           # Master guide (you are here)
├── PRODUCTION_CHECKPOINT_OCT_20.md     # Master task list
├── KNOWLEDGE_AGGREGATION_GUIDE.md      # This file
├── VANUA_DESIGN_PROPOSAL.md            # Design proposal (keep for reference)
├── vanua-preview.html                  # Design preview (keep for reference)
│
├── legal-compliance/                   # GDPR, privacy, terms, cookies
│   └── README.md                       # Detailed guide + templates
│
├── deployment-infrastructure/          # Hosting, monitoring, backups
│   └── README.md                       # Technical setup guide
│
├── marketing-gtm/                      # Launch strategy, content, partnerships
│   └── README.md                       # Marketing playbook
│
├── pricing-payments/                   # Pricing tiers, Stripe, billing
│   └── README.md                       # Monetization strategy
│
├── customer-support/                   # Docs, chatbot, ticketing
│   └── README.md                       # Support infrastructure
│
└── product-decisions/                  # Strategic decisions, ADRs
    └── README.md                       # Decision framework + open questions
```

---

## How to Use This Structure

### Step 1: Identify the Theme

When you need to work on any task from `PRODUCTION_CHECKPOINT_OCT_20.md`, identify which theme it belongs to:

| Checkpoint Section | Theme Folder |
|-------------------|--------------|
| 1. Technical Deployment | `deployment-infrastructure/` |
| 2. Legal & Compliance | `legal-compliance/` |
| 3. Branding & Domain | `product-decisions/` |
| 4. Marketing & GTM | `marketing-gtm/` |
| 5. Pricing Model | `pricing-payments/` |
| 6. UX/UI Validation | `product-decisions/` |
| 7. Team Features | `product-decisions/` |
| 8. Customer Support | `customer-support/` |

### Step 2: Create Research Documents

Navigate to the appropriate folder and create dated research files:

```bash
# Example: Researching GDPR requirements
cd legal-compliance
echo "# GDPR Research Summary" > 2025-10-04-gdpr-requirements.md

# Example: Competitor pricing analysis
cd pricing-payments
echo "# Competitor Pricing Analysis" > 2025-10-05-competitor-pricing.md
```

**Naming Convention:**
- Format: `YYYY-MM-DD-topic-name.md`
- Use descriptive names
- Date = when research was done (for historical tracking)

### Step 3: Aggregate Knowledge

Each research document should follow this template:

```markdown
# [Topic Name]

**Date:** YYYY-MM-DD
**Related Checkpoint Task:** Section X.Y
**Owner:** [Your name/team]
**Status:** Research | Draft | Review | Final

## Summary
Quick 2-3 sentence summary of findings.

## Context
Why we needed this research. What problem does it solve?

## Findings
Detailed research results, organized logically.

## Recommendations
Based on research, what should we do?

## Next Steps
- [ ] Action item 1
- [ ] Action item 2

## Sources
- [Link 1](url)
- [Link 2](url)

## Related Documents
- Link to other research in this folder
- Link to checkpoint section
```

### Step 4: Make Decisions

When research is complete and a decision is needed:

1. Create ADR in `product-decisions/`
2. Use the ADR template (see `product-decisions/README.md`)
3. Get stakeholder approval
4. Update checkpoint plan with decision

**Example:**
```bash
cd product-decisions
cat > ADR-005-support-tool-selection.md << 'EOF'
# ADR-005: Support Tool Selection

**Status:** Proposed
**Date:** 2025-10-06
**Deciders:** Product, Support, Engineering

## Context
Need to choose support ticketing system before Oct 20 launch.

## Decision
Choose Crisp ($25/month) over Intercom ($74/seat).

## Consequences
**Positive:**
- Affordable for early stage
- Clean UI, good UX
- AI chatbot included

**Negative:**
- Less feature-rich than Intercom
- May need to migrate later if we scale

## Alternatives Considered
1. Intercom - too expensive for stage
2. Zendesk - enterprise overkill
3. Plain.com - too new, risky
EOF
```

### Step 5: Track Progress

Update `PRODUCTION_CHECKPOINT_OCT_20.md` when tasks complete:

```markdown
- [x] Research support tools (Completed Oct 5)
- [x] Make decision on support tool (Crisp selected Oct 6)
- [ ] Implement Crisp integration (In progress)
```

---

## Knowledge Aggregation Workflows

### Workflow 1: Legal Research (Example)

**Goal:** Create GDPR-compliant privacy policy by Oct 10

**Steps:**
1. **Research Phase** (Oct 4-5)
   ```bash
   cd legal-compliance
   echo "GDPR research..." > 2025-10-04-gdpr-requirements.md
   echo "Supabase DPA review..." > 2025-10-04-supabase-dpa.md
   echo "Competitor privacy policies..." > 2025-10-05-competitor-analysis.md
   ```

2. **Template Phase** (Oct 6)
   ```bash
   mkdir -p templates
   cp privacy-policy-template-en.md templates/
   # Customize template based on research
   ```

3. **Draft Phase** (Oct 7-8)
   ```bash
   echo "VMS Privacy Policy Draft 1..." > privacy-policy-draft-v1.md
   # Send to legal counsel for review
   ```

4. **Translation Phase** (Oct 9)
   ```bash
   echo "Privacy Policy DE..." > privacy-policy-de-draft-v1.md
   # Professional translation
   ```

5. **Finalization** (Oct 10)
   ```bash
   mv privacy-policy-draft-v1.md privacy-policy-final-en.md
   mv privacy-policy-de-draft-v1.md privacy-policy-final-de.md
   # Implement on website
   ```

### Workflow 2: Pricing Validation (Example)

**Goal:** Validate pricing tiers with beta users by Oct 8

**Steps:**
1. **Research** (Oct 4-5)
   - Competitor pricing analysis
   - Payment psychology research
   - Market positioning

2. **Draft Tiers** (Oct 5)
   - Create pricing proposal
   - Document in `pricing-payments/`

3. **User Validation** (Oct 6-7)
   - Survey 10+ beta users
   - Analyze willingness to pay
   - Document feedback

4. **Adjust & Finalize** (Oct 8)
   - Update pricing based on feedback
   - Get approval
   - Implement in Stripe

### Workflow 3: Marketing Content (Example)

**Goal:** Product Hunt launch post by Oct 15

**Steps:**
1. **Research** (Oct 4-8)
   - Analyze successful PH launches
   - Study top-voted posts
   - Identify patterns

2. **Draft** (Oct 9-12)
   - Write launch post
   - Create tagline
   - Design images

3. **Review** (Oct 13-14)
   - Team feedback
   - A/B test headlines
   - Finalize copy

4. **Schedule** (Oct 15)
   - Queue for Oct 20 launch
   - Prepare follow-up comments

---

## Best Practices

### ✅ DO

1. **Date Everything**
   - Use YYYY-MM-DD format
   - Helps track evolution of thinking

2. **Link Generously**
   - Link to checkpoint tasks
   - Link to related research
   - Link to external sources

3. **Summarize Upfront**
   - TL;DR at top of every document
   - Busy stakeholders scan, don't read

4. **Version Control**
   - All markdown files in git
   - Easy to see history
   - Can revert if needed

5. **Keep It Simple**
   - Plain markdown
   - No complex formatting
   - Easy to search/grep

### ❌ DON'T

1. **Mix Research & Decisions**
   - Research → theme folders
   - Decisions → `product-decisions/`
   - Keep separate for clarity

2. **Create Orphan Documents**
   - Always link to checkpoint
   - Always link to related docs
   - No context-free files

3. **Use Binary Formats**
   - Avoid PDF, DOCX unless necessary
   - Markdown = diffable, searchable
   - Exception: signed legal docs

4. **Duplicate Information**
   - One source of truth per topic
   - Link to it, don't copy
   - Update checkpoint plan when complete

5. **Forget to Update README**
   - If you create new pattern, document it
   - Keep READMEs current
   - They're the entry point

---

## Quick Reference Commands

### Create Research Document
```bash
cd [theme-folder]
echo "# Research Title

**Date:** $(date +%Y-%m-%d)
**Status:** Draft

## Summary
...
" > $(date +%Y-%m-%d)-topic-name.md
```

### Search All Research
```bash
# Find all mentions of "GDPR"
grep -r "GDPR" biz/

# Find all draft documents
find biz/ -name "*.md" -exec grep -l "Status: Draft" {} \;
```

### List Open Decisions
```bash
# Find all ADRs with "Proposed" status
grep -r "Status: Proposed" product-decisions/
```

---

## Weekly Cadence (Until Oct 20)

### Monday
- Review checkpoint progress
- Identify blockers
- Assign new research tasks
- Update folder READMEs if needed

### Wednesday
- Mid-week check-in
- Review research completed
- Make decisions on time-sensitive items
- Update checkpoint plan

### Friday
- Week retrospective
- Archive completed work
- Plan next week priorities
- Celebrate progress 🎉

---

## Folder-Specific Tips

### `legal-compliance/`
- **Get Legal Review Early:** Don't wait until last minute
- **Translate Professionally:** Don't use Google Translate for legal docs
- **Test Cookie Consent:** Make sure it actually blocks trackers
- **Document All Processors:** Every third-party service needs DPA

### `deployment-infrastructure/`
- **Test Early, Test Often:** Don't wait until Oct 19 to deploy
- **Monitor Everything:** You can't fix what you can't see
- **Have Rollback Plan:** Things will go wrong, be ready
- **Cost Estimation:** Know your burn rate before committing

### `marketing-gtm/`
- **Content Calendar:** Plan posts 1 week ahead
- **Batch Content:** Write all launch posts at once
- **Test Everything:** Preview posts, check links, validate images
- **Community Guidelines:** Each platform has rules, follow them

### `pricing-payments/`
- **User Validation:** Talk to real customers, not just assumptions
- **Test Payment Flows:** Test signup, upgrade, downgrade, cancel
- **Tax Compliance:** VAT/sales tax can be complex
- **Stripe Webhooks:** Test all event handlers before production

### `customer-support/`
- **Write Docs First:** Forces you to clarify product
- **Test AI Bot:** 100+ questions before going live
- **Create Macros:** Canned responses for common issues
- **Monitor Metrics:** Track resolution rate, response time

### `product-decisions/`
- **Decide, Don't Defer:** Indecision is worse than wrong decision
- **Document Rationale:** Future you will thank present you
- **Involve Stakeholders:** Get buy-in before finalizing
- **Review Decisions:** Revisit quarterly, change if needed

---

## Common Questions

**Q: Where do I put competitor analysis?**
A: Depends on focus. Pricing → `pricing-payments/`, Marketing → `marketing-gtm/`, Product features → `product-decisions/`

**Q: Should I create subfolders in theme folders?**
A: Yes! Use `research/`, `templates/`, `drafts/`, `final/` as needed

**Q: What if a topic spans multiple themes?**
A: Put it in primary theme, link from others. Example: "Stripe integration" lives in `pricing-payments/`, linked from `deployment-infrastructure/`

**Q: How do I handle sensitive information (API keys, passwords)?**
A: **Never** commit secrets to git. Use environment variables, 1Password, or `.env` files in `.gitignore`

**Q: Can I use tools like Notion instead?**
A: Markdown in git is preferred (version control, searchable, portable). But if team prefers Notion, that's okay too. Just maintain checkpoint plan here.

---

## Success Metrics

**Good Knowledge Aggregation:**
- ✅ Any team member can find relevant research in < 2 minutes
- ✅ Decisions are documented with clear rationale
- ✅ No duplicate work (people search before researching)
- ✅ Checkpoint plan stays updated
- ✅ READMEs reflect current state

**Poor Knowledge Aggregation:**
- ❌ Research scattered across Slack, email, random docs
- ❌ Decisions made without documentation
- ❌ Multiple people researching same topic
- ❌ Checkpoint plan out of sync with reality
- ❌ Can't find anything when you need it

---

## Get Started Checklist

Before diving into research:

- [ ] Read this guide
- [ ] Read main `README.md`
- [ ] Read relevant theme folder README
- [ ] Check if research already exists (search first!)
- [ ] Identify checkpoint task you're working on
- [ ] Create dated research document
- [ ] Link to checkpoint task
- [ ] Do the research
- [ ] Document findings
- [ ] Make recommendation
- [ ] Update checkpoint plan

---

**Questions?** Update this guide! It's a living document.

**Last Updated:** October 4, 2025
**Maintained By:** Team (collaborative)
