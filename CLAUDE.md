# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **marketing website for Vibe CMS**, an AI-powered content management system that combines content safety with powerful productivity features. This site serves as the public face of the Vibe CMS product.

### What is Vibe CMS?
Vibe CMS is a headless CMS built for AI-forward teams, featuring:
- Multi-tenant architecture with FastAPI backend and Vue 3 admin interface
- Content versioning with instant rollback
- One-click translation and automated SEO
- TypeScript SDK for seamless frontend integration
- MCP server for AI agent integration

### Purpose & Goals
This marketing website provides:
- **Landing Page**: Showcase Vibe CMS features, benefits, and use cases
- **Documentation**: Getting started guides, API reference, tutorials
- **Blog**: Product updates, best practices, use cases (future)
- **FAQ & Resources**: Support content and developer resources

### Dogfooding
This website uses **Vibe CMS itself** to manage all marketing content, demonstrating the product's capabilities in a real-world application.

## Tech Stack

- **Astro**: Static site generator optimized for content-focused websites
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vibe CMS**: Content management via TypeScript SDK
- **TypeScript**: Type-safe development

### Architecture
1. **Content Management**: Marketing content stored and managed in Vibe CMS
2. **Build Time**: Astro fetches content from Vibe CMS via SDK during static site generation
3. **Deployment**: Static HTML/CSS/JS files deployed to CDN for fast global delivery

## Development Commands

### Start Development Server
```bash
npm run dev
```
Starts the Astro dev server with hot module reloading, typically at http://localhost:4321

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deployment

### Type Checking
```bash
npm run astro check
```
Run TypeScript type checking across the project

## Vibe CMS Integration

### SDK Setup
Content is fetched from Vibe CMS using the TypeScript SDK. Configuration typically includes:
- API endpoint URL
- Project ID
- API key for authentication

### SDK Response Structure

**IMPORTANT**: The Vibe CMS SDK returns data in a nested structure that requires careful extraction.

#### Singleton Queries (`.first()`)
When fetching a single content item, the SDK returns:
```typescript
{
  data: {
    id: "content-item-id",
    data: {
      field1: "value1",
      field2: "value2",
      // ... your actual content fields
    },
    locale: "en-US"
  },
  assetManager: { ... }
}
```

**To access content fields**, you must navigate to `result.data.data.field_name`.

#### Collection Queries (`.all()`, `.many()`)
Returns an array of items, each with the same structure:
```typescript
[
  {
    id: "item-id",
    data: {
      field1: "value1",
      // ... content fields
    },
    locale: "en-US"
  },
  // ... more items
]
```

### Helper Functions

The project includes helper functions in `src/lib/cms.ts` to extract data correctly:

- **`extractData<T>(result)`**: Extracts data from singleton queries
  - Handles nested `result.data.data` structure
  - Also supports alternative response formats (translations array)

- **`extractCollection<T>(results)`**: Extracts data from collection queries
  - Converts to array if needed
  - Extracts `data` property from each item

### Usage Example

```typescript
import { cms, extractData, extractCollection, type LandingHero } from '../../lib/cms';

// Singleton query
const heroResult = await cms.collection('landing-hero').first();
const heroData = extractData<LandingHero>(heroResult);
// Now heroData contains { field1, field2, ... } directly

// Collection query
const allItemsRaw = await cms.collection('items').all();
const allItems = extractCollection<Item>(allItemsRaw);
// Now allItems is Array<{ field1, field2, ... }>
```

**Always use the helper functions** to ensure correct data extraction across different SDK response formats.

### Content Workflow
1. Content editors manage content in Vibe CMS admin interface
2. During build, Astro pages fetch content via SDK in frontmatter
3. Content is rendered into static HTML
4. Rebuild/redeploy to reflect content updates

## MCP Integration

This project uses the Astro Docs MCP server (configured in `.mcp.json`) which provides:
- Quick access to official Astro documentation
- Component and API reference lookups
- Best practices and examples

Use the MCP tools to query Astro documentation when implementing features or troubleshooting issues.

## Astro Architecture

### Page Routing
- Pages live in `src/pages/` and use file-based routing
- `.astro`, `.md`, and `.mdx` files automatically become routes
- Dynamic routes use `[param]` syntax in filenames

### Component Structure
- Astro components (`.astro` files) can contain HTML, CSS, and JavaScript
- Components support any framework (React, Vue, Svelte) via islands architecture
- Frontmatter (between `---` fences) runs at build time only

### Content Management
- **Primary**: Content fetched from Vibe CMS via TypeScript SDK at build time
- **Optional**: Local content in `src/content/` using Astro's Content Collections API for static content
- SDK provides type-safe content queries: `cms.collection('posts').all()`, `cms.collection('posts').slug('my-post')`
- Content from Vibe CMS can be used directly in Astro page frontmatter and components

### Static Assets
- Public assets go in `public/` directory (served as-is)
- Imported assets in `src/` are processed and optimized
- Images can be optimized using Astro's `<Image />` component

### Styling
- Scoped styles by default in `.astro` components
- Global styles typically in `src/styles/`
- CSS preprocessing and frameworks can be added via integrations
