import { createVibeCMS } from 'vibe-cms-sdk';

/**
 * Vibe CMS client configured for build-time content fetching (SSG)
 * All content is fetched during the build process, no runtime API calls
 */
export const cms = createVibeCMS({
  projectId: 'f6691739-7608-430f-9412-3f03e16a28f6',
  baseUrl: 'https://vibe-cms-app-prod-qoovy.ondigitalocean.app',
  locale: 'en-US',
  // No cache configuration - not needed for build-time only
});

/**
 * Vibe CMS client for documentation content
 * Separate project for end-user documentation
 */
export const docsCms = createVibeCMS({
  projectId: '6c423480-9097-4084-bafe-0ecac9ee581a',
  apiKey: 'sk_LLA3AOtJIg0B14EoijrfnZExv5Wkro6wEDZKY5RfQYU',
  baseUrl: 'https://vibe-cms-app-prod-qoovy.ondigitalocean.app',
  locale: 'en-US',
});

/**
 * TypeScript interfaces for CMS content types
 */

// Singleton: landing-hero
export interface LandingHero {
  headline_prefix: string;
  rotating_words: string; // JSON array as string
  description: string;
  primary_cta_text: string;
  secondary_cta_text: string;
}

// Singleton: landing-cta
export interface LandingCTA {
  title: string;
  description: string;
  primary_cta_text: string;
  secondary_cta_text: string;
}

// Singleton: site-brand
export interface SiteBrand {
  name: string;
  tagline: string;
}

// Collection: section-headings
export interface SectionHeading {
  slug: string;
  title: string;
  description: string;
  sort_order: number;
}

// Collection: stats
export interface Stat {
  value: string;
  label: string;
  category: 'hero' | 'trust-badge';
  sort_order: number;
}

// Collection: problems
export interface Problem {
  title: string;
  description: string;
  sort_order: number;
}

// Collection: features
export interface Feature {
  name: string;
  slug: string;
  short_name: string;
  description: string;
  benefits: string; // markdown
  sort_order: number;
}

// Collection: integrations
export interface Integration {
  name: string;
  slug: string;
  logo?: {
    id: string;
    url: string;
    alt_text?: string;
  };
  sort_order: number;
}

// Collection: use-cases
export interface UseCase {
  name: string;
  category: 'compliance' | 'content-type';
  sort_order: number;
}

// Collection: pricing-plans
export interface PricingPlan {
  name: string;
  slug: string;
  price_amount: string;
  price_period: string;
  description?: string;
  features: string; // markdown
  cta_text: string;
  sort_order: number;
}

// Documentation content types
export interface DocPage {
  title: string;
  slug: string;
  content: string; // markdown
  description?: string;
  category?: string;
  sort_order: number;
}

/**
 * Helper to parse rotating words JSON string
 */
export function parseRotatingWords(jsonString: string | undefined): string[] {
  if (!jsonString) {
    console.warn('rotating_words is undefined or empty, returning default values');
    return ['AI Agents'];
  }
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to parse rotating_words:', error);
    return ['AI Agents'];
  }
}

/**
 * Helper to ensure we have an array (SDK may return object with numeric keys)
 */
export function toArray<T>(data: T[] | Record<string, T> | T): T[] {
  if (Array.isArray(data)) {
    return data;
  }
  if (typeof data === 'object' && data !== null) {
    return Object.values(data);
  }
  return [];
}

/**
 * Helper to extract data from SDK response for singleton (.first()) calls
 * SDK may return:
 * - { data: { id, data: {...}, locale }, assetManager } (wrapped)
 * - { id, data: {...}, locale } (direct)
 * - { translations: [{data: {...}}] } (MCP server format)
 */
export function extractData<T>(result: any): T | null {
  if (!result) return null;

  // Check if result has translations array (MCP server / full content item response)
  if (result.translations && Array.isArray(result.translations) && result.translations.length > 0) {
    return result.translations[0].data as T;
  }

  // SDK wraps content in { data: { id, data: {...}, locale }, assetManager }
  // We need to extract the inner data object
  if (result.data) {
    // If result.data has an 'id' property, it's the wrapper { id, data, locale }
    // and we need to extract result.data.data
    if (result.data.id && result.data.data) {
      return result.data.data as T;
    }
    // Otherwise result.data might already be the content
    return result.data as T;
  }

  // If result has id and data properties at top level, extract the data
  if (result.id && result.data) {
    return result.data as T;
  }

  // Fallback: return result as-is
  return result as T;
}

/**
 * Helper to extract data from SDK response for collection (.all(), .many()) calls
 * SDK returns array of { id, data, locale } structures
 * Each item's data property contains the actual content fields
 */
export function extractCollection<T>(results: any): T[] {
  if (!results) return [];

  // If results is wrapped in a data property, unwrap it first
  const unwrapped = results.data || results;

  // Convert to array if needed (SDK sometimes returns object with numeric keys)
  const arr = Array.isArray(unwrapped) ? unwrapped : Object.values(unwrapped);

  // Extract data from each item
  // Each item has structure { id, data: {...actualContent}, locale }
  return arr
    .map(item => {
      if (!item) return null;
      // If item has a data property, extract it
      if (item.data) return item.data;
      // Otherwise return the item as-is (might already be extracted)
      return item;
    })
    .filter(Boolean) as T[];
}
