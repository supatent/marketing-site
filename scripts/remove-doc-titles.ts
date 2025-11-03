/**
 * Script to remove h1 titles from documentation content in Vibe CMS
 *
 * This script fetches all documentation items and removes the first h1 heading
 * from the markdown content, since we have a dedicated title field.
 */

import { createVibeCMS } from 'vibe-cms-sdk';
import { extractCollection, type DocPage } from '../src/lib/cms.js';

const PROJECT_ID = '6c423480-9097-4084-bafe-0ecac9ee581a';
const API_KEY = 'sk_f0j4XFz2JXxmzln4vKhOOv8v1NHZ-BlICNSqvOI5C74'; // Write API key
const BASE_URL = 'https://vibe-cms-app-prod-qoovy.ondigitalocean.app';

const cms = createVibeCMS({
  baseUrl: BASE_URL,
  projectId: PROJECT_ID,
  apiKey: API_KEY,
  locale: 'en-US',
});

/**
 * Removes the first h1 heading from markdown content
 */
function removeFirstH1(content: string): string {
  // Match the first h1 heading (# Title) at the start of the content or after whitespace
  const h1Pattern = /^\s*#\s+.+?\n+/;
  return content.replace(h1Pattern, '');
}

async function updateDocumentation() {
  try {
    console.log('Fetching all documentation items...');

    // Fetch all documentation items
    const docsResult = await cms.collection('documentation-pages').all();

    // SDK wraps results in { data: [...], assetManager } structure
    const docsRaw = docsResult.data || docsResult;

    // Convert to array if it's an object with numeric keys
    const docsArray = Array.isArray(docsRaw) ? docsRaw : Object.values(docsRaw);

    console.log(`Found ${docsArray.length} documentation items`);

    for (const docItem of docsArray) {
      const docId = docItem.id;
      const docData = docItem.data as DocPage;
      const title = docData.title || 'Untitled';
      const content = docData.content || '';

      // Check if content starts with an h1
      if (content.trim().match(/^#\s+/)) {
        console.log(`\nUpdating: ${title} (ID: ${docId})`);
        console.log('Original content preview:', content.substring(0, 100));

        const newContent = removeFirstH1(content);
        console.log('Updated content preview:', newContent.substring(0, 100));

        // Update via admin API (SDK doesn't support updates)
        // Try PATCH method for partial updates
        const updateResponse = await fetch(
          `${BASE_URL}/api/admin/projects/${PROJECT_ID}/content/documentation-pages/${docId}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'X-API-Key': API_KEY,
            },
            body: JSON.stringify({
              translations: [{
                locale: 'en-US',
                data: {
                  content: newContent,
                }
              }]
            }),
          }
        );

        if (!updateResponse.ok) {
          const errorText = await updateResponse.text();
          throw new Error(`Failed to update ${title}: ${updateResponse.status} - ${errorText}`);
        }

        console.log('✓ Updated successfully');
      } else {
        console.log(`Skipping: ${title} (no h1 at start)`);
      }
    }

    console.log('\n✓ All documentation items processed!');
  } catch (error) {
    console.error('Error updating documentation:', error);
    throw error;
  }
}

// Run the script
updateDocumentation().catch(console.error);
