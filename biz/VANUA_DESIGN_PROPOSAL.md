# Vanua.ai Design Proposal
**Brand Redesign for VMS → Vanua CMS**
**Date:** October 4, 2025

---

## Brand Philosophy: "Home for Your Content"

**Vanua** (Fijian for "land" or "home") represents:
- **Grounding**: Solid foundation for your content
- **Community**: A place where content and creators belong
- **Natural**: Organic, earth-connected aesthetic
- **Timeless**: Rooted traditions meet modern technology

---

## Design Direction

### Current State (Terminal Velocity / Claude Style)
- Dark background (#0A0A0B)
- Terminal aesthetic
- High-tech, developer-focused
- Green/orange/blue code colors
- Monospace fonts
- Command-line interface feel

### Vanua Transformation
- **Earth-toned palette** (warm neutrals, natural greens, clay tones)
- **Organic shapes** (rounded corners, flowing layouts)
- **Natural textures** (subtle patterns inspired by woven materials, wood grain)
- **Grounded typography** (serif headlines for roots, sans-serif body for modern)
- **Horizontal flow** (like land/horizon, not vertical tech stacks)
- **Warmth over coldness** (inviting, not intimidating)

---

## Color Palette

### Primary Colors
```
Vanua Earth (Primary Background)
Light: #F5F1E8 (warm off-white, like sand)
Dark: #1C1814 (deep earth brown, not pure black)

Vanua Clay (Surfaces)
Light: #E8DCC8 (light terracotta)
Dark: #2D2619 (rich dark soil)

Vanua Soil (Interactive Elements)
Light: #C4A57B (golden brown)
Dark: #4A3F2A (dark earth)
```

### Accent Colors
```
Vanua Green (Success, Growth)
Light: #6B8E23 (olive green)
Dark: #90A955 (sage green)

Vanua Ocean (Links, Info)
Light: #4A7C7E (teal)
Dark: #5FA8AA (seafoam)

Vanua Sun (Highlights, Warnings)
Light: #D4A574 (warm tan)
Dark: #E8B88A (sunlight on sand)
```

### Typography Colors
```
Font Primary
Light: #2D2619 (dark soil - high contrast)
Dark: #E8DCC8 (light clay - warm white)

Font Muted
Light: #6B5C4D (medium brown)
Dark: #A89476 (warm gray)
```

---

## Typography System

### Headings (Serif - Rooted)
**Font:** Merriweather or Lora (Google Fonts)
- H1: 48px, font-weight: 700, letter-spacing: -0.02em
- H2: 36px, font-weight: 700
- H3: 28px, font-weight: 600

**Rationale:** Serif fonts evoke tradition, roots, and permanence (like land)

### Body (Sans-serif - Modern)
**Font:** Inter or DM Sans
- Body: 16px, font-weight: 400, line-height: 1.6
- Small: 14px, font-weight: 400

**Rationale:** Clean, modern, readable (the tech living on the land)

### Monospace (Code)
**Font:** JetBrains Mono
- Code: 14px, font-weight: 400

**Rationale:** Keep for technical content, but minimize usage

---

## Visual Elements

### Borders & Corners
- Border radius: 12px (organic, soft)
- No harsh borders - use subtle shadows or background color changes

### Spacing
- Base unit: 8px
- Section padding: 80px vertical, 24px horizontal
- Component spacing: 16px, 24px, 32px

### Shadows (Subtle)
```css
/* Light mode */
box-shadow: 0 2px 8px rgba(45, 38, 25, 0.08);

/* Dark mode */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
```

### Patterns (Woven Texture - Subtle)
Background pattern inspired by woven mats (very subtle, 2-3% opacity):
- Crosshatch or diagonal lines
- Only on hero section background

---

## Hero Section Redesign

### Layout Changes
**Before:** Terminal window with typing animation
**After:** Horizontal "landscape" layout with grounded messaging

### Content Structure
```
┌─────────────────────────────────────────────────┐
│  [Vanua Logo]                    [Navigation]   │
├─────────────────────────────────────────────────┤
│                                                  │
│  Where Your Content                              │
│  Finds Its Home                                  │
│                                                  │
│  [Subtitle with flowing text]                   │
│                                                  │
│  [Primary CTA]  [Secondary CTA]                 │
│                                                  │
│  ┌──────────────────────────────────────┐      │
│  │                                       │      │
│  │    [Visual: Organic content flow]    │      │
│  │    (Not terminal, more like layers)  │      │
│  │                                       │      │
│  └──────────────────────────────────────┘      │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Messaging Updates
**Current:** "Built for [rotating developer terms]"
**Vanua:** "Home for [rotating content types]"

**Rotating terms:**
- "your stories"
- "your ideas"
- "your creations"
- "your community"
- "global voices"
- "growing teams"

**Current subtitle:** "AI-powered content safety. Git-style versioning..."
**Vanua subtitle:** "Plant your content on solid ground. Git-style versioning for instant rollback. One-click translation to reach the world. SEO that grows naturally. Your content's foundation."

---

## Component Redesign Examples

### Buttons
**Before:** Sharp rectangles, bright backgrounds
**After:** Rounded (12px), earth-toned, with hover transitions

```css
/* Primary Button */
background: #6B8E23 (vanua-green-light)
color: #F5F1E8 (vanua-earth-light)
padding: 12px 32px
border-radius: 12px
font-weight: 600

hover: brightness(110%)
```

### Cards/Surfaces
**Before:** Dark surfaces (#0A0A0B)
**After:** Layered earth tones

```css
/* Light Mode Card */
background: #E8DCC8 (vanua-clay-light)
border-radius: 16px
padding: 32px

/* Dark Mode Card */
background: #2D2619 (vanua-clay-dark)
```

### Input Fields
**Before:** Minimal, flat, dark
**After:** Organic, warm, inviting

```css
background: rgba(228, 220, 200, 0.3) /* translucent clay */
border: 1px solid rgba(107, 92, 77, 0.2)
border-radius: 12px
padding: 12px 16px

focus: border-color: #6B8E23 (vanua-green)
```

---

## Section Redesign

### 1. Hero Section
**Theme:** "Welcome Home"
- Warm greeting
- Organic flowing visual (not terminal)
- Earth-toned gradient background
- Horizontal layout (landscape, not portrait)

### 2. Problems Section
**Keep content**, update visual approach:
- Before: Dark boxes with problems
- After: Natural "soil layers" showing challenges being rooted out
- Icons: Organic shapes (seeds, roots, growth)

### 3. Features Sections
**Visual metaphor:** "Growing Your Content Garden"

**AI Safety:**
- Visual: Protective canopy (tree covering seedlings)
- Color: Vanua Green
- Message: "Shelter your content with AI verification"

**Translation:**
- Visual: Roots spreading (one tree, many branches)
- Color: Vanua Ocean (connection)
- Message: "Grow your reach across languages"

**SEO:**
- Visual: Sunlight reaching plants
- Color: Vanua Sun
- Message: "Let your content bloom in search"

### 4. Integrations
**Before:** Tech logos on dark background
**After:** "Ecosystem" approach
- Circular layout (like a community circle)
- Earth-toned connector lines
- Message: "Part of a thriving ecosystem"

### 5. Pricing
**Before:** Terminal-style tiers
**After:** "Foundation Plans"
- Free: "Seed" (plant your first content)
- Pro: "Roots" (establish your foundation)
- Team: "Forest" (grow together)
- Enterprise: "Island" (your own land)

### 6. Footer
**Before:** Minimal, dark
**After:** "Grounded" footer
- Thicker, more substantial
- Organic divider (wave or horizon line)
- Warmer tone

---

## Animation Philosophy

### Current
- Fast typing animations
- Terminal cursor blinks
- Code-style transitions

### Vanua Approach
- **Slower, deliberate** (like things growing)
- **Fade and rise** (content emerging from ground)
- **Gentle hover states** (brighten, don't jump)
- **Smooth page transitions** (slide horizontally like landscape)
- **Parallax scrolling** (subtle depth, like terrain)

---

## Iconography

### Current Style
- Sharp, technical icons
- Monochrome or terminal colors

### Vanua Style
- **Organic shapes** (rounded, natural)
- **Nature-inspired** (leaves, roots, sun, water)
- **Two-tone** (earth + accent color)
- **Filled, not outlined** (solid, grounded)

**Icon Examples:**
- Content: Seedling growing
- Version control: Tree with branches
- Translation: Roots spreading
- SEO: Sun rays
- AI Safety: Protective canopy
- Team: Circle of trees

---

## Responsive Strategy

### Desktop (1200px+)
- Wide horizontal layouts
- Landscape imagery
- Spacious padding (80px vertical)

### Tablet (768px - 1199px)
- Stack some horizontal elements
- Reduce padding (48px vertical)
- Keep organic feel

### Mobile (< 768px)
- Full vertical stack
- Touch-friendly buttons (48px minimum)
- Simplified visuals
- Maintain earth tones and warmth

---

## Implementation Strategy

### Phase 1: Color & Typography
1. Update CSS variables in `style.css`
2. Import Google Fonts (Merriweather, Inter)
3. Test light/dark mode

### Phase 2: Hero Transformation
1. Redesign ClaudeStyleHero.vue → VanuaHero.vue
2. Remove terminal window
3. Add organic visual element
4. Update messaging

### Phase 3: Component Updates
1. Button styles
2. Card/surface styles
3. Input field styles
4. Navigation

### Phase 4: Section Redesign
1. Problems section
2. Features sections
3. Integrations
4. Pricing
5. Footer

### Phase 5: Polish
1. Add subtle textures
2. Implement animations
3. Test accessibility
4. Mobile optimization

---

## Brand Voice Updates

### Tone Shift
**Before (Terminal Velocity):**
- Technical
- Command-driven
- Developer-first
- Fast, efficient
- "Build faster"

**After (Vanua):**
- Welcoming
- Nurturing
- Community-driven
- Steady, reliable
- "Grow together"

### Messaging Examples

**Hero:**
- Before: "Transform content management from hours-long workflows into a single command"
- After: "Plant your content on solid ground. Let it grow, branch, and reach the world."

**Features:**
- Before: "Git-style versioning. CLI-first workflow."
- After: "Version control rooted in trust. Your content's history, preserved and protected."

**CTA:**
- Before: "Install now" / "Get started"
- After: "Find your home" / "Plant your first seed"

---

## Success Metrics

### Design Goals
- ✅ Warmer, more inviting than current dark terminal
- ✅ Distinctive from other CMSs (not another dark SaaS)
- ✅ Appeals to content creators, not just developers
- ✅ Maintains technical credibility
- ✅ Accessible and inclusive
- ✅ Performs well (fast load, smooth animations)

### Target Audience Shift
**Before:** Technical developers, CLI-comfortable users
**After:** Content teams, creative agencies, community builders (still technical, but friendlier)

---

## Competitive Differentiation

**vs. Contentful/Sanity (Corporate Blue/Purple):**
- Warmer, more human
- Earth tones vs. corporate colors
- Community vs. enterprise

**vs. WordPress (Traditional):**
- Modern, clean design
- Better typography
- Cohesive brand system

**vs. Ghost (Minimalist Black/White):**
- More colorful and warm
- Natural vs. stark
- Inviting vs. austere

---

## Next Steps

1. **Team Review:** Discuss this proposal (deadline: Oct 6)
2. **Design Mockups:** Create high-fidelity designs in Figma (Oct 7-9)
3. **Component Library:** Build reusable Vanua components (Oct 10-12)
4. **Implementation:** Redesign landing page (Oct 13-17)
5. **Testing:** UX testing with 10+ users (Oct 18-19)
6. **Launch:** Deploy with Oct 20 checkpoint

---

## Appendix: CSS Variable Reference

```css
/* Vanua Color System */
:root {
  /* Backgrounds */
  --vanua-earth-light: #F5F1E8;
  --vanua-earth-dark: #1C1814;

  /* Surfaces */
  --vanua-clay-light: #E8DCC8;
  --vanua-clay-dark: #2D2619;

  /* Interactive */
  --vanua-soil-light: #C4A57B;
  --vanua-soil-dark: #4A3F2A;

  /* Accents */
  --vanua-green-light: #6B8E23;
  --vanua-green-dark: #90A955;
  --vanua-ocean-light: #4A7C7E;
  --vanua-ocean-dark: #5FA8AA;
  --vanua-sun-light: #D4A574;
  --vanua-sun-dark: #E8B88A;

  /* Typography */
  --vanua-font-primary-light: #2D2619;
  --vanua-font-primary-dark: #E8DCC8;
  --vanua-font-muted-light: #6B5C4D;
  --vanua-font-muted-dark: #A89476;
}
```

---

**Document Version:** 1.0
**Author:** Design Team + Claude Code
**Last Updated:** October 4, 2025
