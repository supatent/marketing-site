import type { APIRoute } from 'astro';

const CMS_BASE_URL = 'https://vibe-cms-app-prod-qoovy.ondigitalocean.app';
const PROJECT_ID = 'f6691739-7608-430f-9412-3f03e16a28f6';
const COLLECTION_SLUG = 'waitlist';
// API key should be set as environment variable in Vercel
const API_KEY = import.meta.env.VIBE_CMS_API_KEY || process.env.VIBE_CMS_API_KEY;

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { email, project_name, project_type, team_size, message } = data;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // First, create a content item
    const createResponse = await fetch(
      `${CMS_BASE_URL}/api/v1/projects/${PROJECT_ID}/collections/${COLLECTION_SLUG}/items`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY || '',
        },
        body: JSON.stringify({
          status: 'published'
        })
      }
    );

    if (!createResponse.ok) {
      const errorText = await createResponse.text();
      console.error('CMS Create Error:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to create item' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const createResult = await createResponse.json();
    const contentItemId = createResult.id;

    // Then, add the translation with the actual data
    const translationResponse = await fetch(
      `${CMS_BASE_URL}/api/v1/projects/${PROJECT_ID}/content/${contentItemId}/translations`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY || '',
        },
        body: JSON.stringify({
          locale: 'en-US',
          data: {
            email,
            project_name: project_name || '',
            project_type: project_type || '',
            team_size: team_size || '',
            message: message || ''
          }
        })
      }
    );

    if (!translationResponse.ok) {
      const errorText = await translationResponse.text();
      console.error('CMS Translation Error:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to save data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Waitlist submission error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
