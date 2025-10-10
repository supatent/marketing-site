# Product Decisions

**Checkpoint Sections:** 3 (Branding), 6 (UX/UI), 7 (Team Features), 14 (Open Questions)
**Owner:** Product Team
**Deadline:** Various (see below)

## Overview

This folder contains all strategic product decisions, trade-offs, and direction-setting choices that shape the product.

## Decision Framework

We use **Architecture Decision Records (ADRs)** format for all major decisions:

```markdown
# ADR-XXX: [Decision Title]

**Status:** Proposed | Accepted | Rejected | Superseded
**Date:** YYYY-MM-DD
**Deciders:** [Who made the decision]

## Context
What's the situation forcing this decision?

## Decision
What we decided to do.

## Consequences
- **Positive:** Benefits of this choice
- **Negative:** Trade-offs and costs
- **Risks:** What could go wrong

## Alternatives Considered
1. Option A - why we didn't choose it
2. Option B - why we didn't choose it

## Related Decisions
- Links to related ADRs
- Links to checkpoint tasks
```

## Open Decisions (From Checkpoint Section 14)

### ADR-001: Product Name - "VMS" vs Rebrand
**Status:** ⏳ Proposed
**Deadline:** October 5, 2025
**Context:** Current name "VMS" (Vibe CMS), but available domain options suggest rebrand

**Options:**
1. **Keep "VMS" / Vibe CMS**
   - Pros: Established, clear CMS indication
   - Cons: vibecms.ai, vms.ai, vibe.ai all taken

2. **Rebrand to Yasawa** (yasawa.ai available)
   - Pros: Available .ai domain, exotic/memorable, aligns with "vibe"
   - Cons: Pronunciation challenge, may need explanation

3. **Rebrand to Paros** (paros.ai available)
   - Pros: Available .ai domain, simple/European, professional
   - Cons: Less distinctive in CMS market

4. **Rebrand to Vanua** (vanua.ai available)
   - Pros: Available .ai domain, means "home/land", grounded feel
   - Cons: Unfamiliar word, may confuse non-Fijian speakers

**Decision Criteria:**
- Domain availability (.ai TLD)
- Trademark availability
- Pronunciation/memorability
- Brand alignment with product values
- International appeal

**Action:** Team vote by Oct 5
**Related:** `../VANUA_DESIGN_PROPOSAL.md`, `../PRODUCTION_CHECKPOINT_OCT_20.md` Section 3

---

### ADR-002: AI Agents as Team Members
**Status:** ⏳ Proposed
**Deadline:** October 10, 2025
**Context:** Should AI agents be first-class team members with permissions?

**Options:**
1. **MVP: AI Agents as Team Members**
   - Agents can be invited to teams
   - Role-based permissions (viewer, editor, admin)
   - Audit trail tracks agent actions separately
   - Use case: Autonomous content generation agents

2. **Defer to v2: API Keys Only**
   - Agents use project API keys (existing MCP approach)
   - No team membership concept
   - Simpler implementation
   - Less flexible permissions

**Decision Criteria:**
- Development time (checkpoint deadline: Oct 20)
- User demand (beta feedback)
- Technical complexity
- Competitive differentiation

**Recommendation:** Defer to v2 - API keys sufficient for checkpoint
**Reason:** Limited time, MCP already works with API keys, can add team membership later

**Action:** Product team approval by Oct 10

---

### ADR-003: MCP Chat UI - In-App vs External
**Status:** ⏳ Proposed
**Deadline:** October 12, 2025
**Context:** Should VMS have built-in MCP chat interface or rely on external clients?

**Options:**
1. **Build In-App MCP Chat UI**
   - Pros: Better UX, integrated experience, competitive feature
   - Cons: 2-3 weeks development, distracts from core CMS

2. **External MCP Clients Only** (Claude Desktop, etc.)
   - Pros: Faster to market, leverage existing tools, focus on core CMS
   - Cons: Extra setup for users, less integrated

**Decision Criteria:**
- Time to checkpoint (Oct 20)
- User workflows (how often do users need MCP chat?)
- Competitive landscape
- Development resources

**Recommendation:** Start with external clients, add in-app chat in v2
**Reason:** MCP is power-user feature, Claude Desktop already excellent

**Action:** Product team approval by Oct 12

---

### ADR-004: Launch Strategy - Product Hunt + HN Timing
**Status:** ⏳ Proposed
**Deadline:** October 15, 2025
**Context:** Should we launch on Product Hunt and Hacker News same day or stagger?

**Options:**
1. **Same Day Launch** (Oct 20)
   - Pros: Maximum momentum, coordinated push
   - Cons: Split attention, overwhelming support load

2. **Stagger: Product Hunt (Oct 20), HN (Oct 22)**
   - Pros: Focused attention each day, spread support load, learn from PH
   - Cons: Less momentum, two separate pushes

3. **HN First (Oct 20), Product Hunt (Oct 22)**
   - Pros: HN feedback before PH, technical audience first
   - Cons: Risk: negative HN feedback hurts PH launch

**Decision Criteria:**
- Support team capacity
- Target audience overlap
- Community norms (PH launches on specific days)
- Momentum vs burnout

**Recommendation:** Same day (Oct 20) - Product Hunt early AM, HN afternoon
**Reason:** Maximize momentum, PH launches Sundays ideally

**Action:** Marketing team proposal by Oct 15

---

## UX/UI Decision Records

### ADR-010: Onboarding Flow - Guided vs Open
**Status:** ⏳ Proposed
**Deadline:** October 12, 2025
**Context:** How much guidance in initial user onboarding?

**Current Flow:**
1. Sign up → Dashboard → Empty state
2. User figures out: Create project → Create collection → Add content

**Proposed: Guided Onboarding**
1. Sign up → Welcome wizard
2. "Create your first project" → Template selection (blog, e-commerce, docs)
3. Collection pre-created based on template
4. "Add your first content item" → Form with sample data pre-filled
5. "Publish and test API" → Code snippet + test button

**Decision Criteria:**
- Time to first value (target: < 5 minutes)
- User feedback (beta testing)
- Drop-off rates at each step
- Development time

**Action:** UX testing with 10 users by Oct 10

---

### ADR-011: Mobile CMS Editing - Phase 1 vs Full Support
**Status:** ⏳ Proposed
**Deadline:** October 10, 2025
**Context:** How much mobile editing support for checkpoint?

**Options:**
1. **Phase 1: Read-Only Mobile**
   - View content, collections, files
   - No editing/creating on mobile
   - Focus: Desktop editing experience

2. **Full Mobile Editing**
   - Create/edit content on mobile
   - Simplified UI for small screens
   - Mobile-optimized file upload
   - Requires 2-3 weeks extra development

**Decision:** Phase 1 recommended (read-only mobile)
**Reason:** CMS editing primarily desktop activity, mobile can wait for v2
**Exception:** Ensure responsive design for viewing/monitoring

---

## Branding Decisions

### ADR-020: Visual Identity - Terminal vs Vanua Theme
**Status:** 🔄 In Progress
**Deadline:** October 8, 2025
**Context:** Current landing page has "Terminal Velocity" dark theme, Vanua proposal offers warm/natural theme

**Current:** Dark background, terminal aesthetic, developer-focused
**Proposed:** Earth tones, natural warmth, community-focused (see `../VANUA_DESIGN_PROPOSAL.md`)

**Decision Points:**
- [ ] Keep Terminal Velocity or adopt Vanua theme?
- [ ] If Vanua: Full rebrand or gradual transition?
- [ ] Timeline: Can we execute by Oct 20?

**Related Files:**
- `../VANUA_DESIGN_PROPOSAL.md`
- `../vanua-preview.html`
- `../../PRPs/PRP-028-terminal-velocity-landing-page.md`

---

## Feature Prioritization (Post-Checkpoint)

### Q4 2025 Roadmap (After Oct 20)
**Status:** Draft

**Must Have (P0):**
1. Version comparison UI
2. Content diff visualization
3. Bulk content import/export
4. Advanced search and filtering

**Should Have (P1):**
5. In-app MCP chat interface
6. AI agents as team members
7. Workflow automation (publish schedules)
8. Content templates library

**Nice to Have (P2):**
9. Mobile CMS editing
10. Desktop app (Electron)
11. Browser extension (quick content capture)
12. AI content suggestions

**Research (P3):**
13. Blockchain content verification
14. Decentralized storage integration
15. Real-time collaboration (multiplayer editing)

---

## Decision Log (Accepted)

| ADR | Decision | Date | Status |
|-----|----------|------|--------|
| TBD | TBD | TBD | Pending |

---

## How to Propose a Decision

1. Create new file: `ADR-XXX-topic-name.md`
2. Use template above
3. Tag relevant stakeholders
4. Set deadline for decision
5. Present in team meeting
6. Update status when decided
7. Link to checkpoint plan if applicable

---

**Last Updated:** October 4, 2025
**Next Review:** Weekly until Oct 20
