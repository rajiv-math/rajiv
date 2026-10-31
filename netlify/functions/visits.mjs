// Netlify Function: stores and returns the site's visitor count.
// GET  /api/visits -> { count }        (read only)
// POST /api/visits -> { count }        (adds one visit, then returns the new total)
import { getStore } from '@netlify/blobs';

export default async (req) => {
  const store = getStore('site-stats');
  let count = Number(await store.get('visits')) || 0;

  if (req.method === 'POST') {
    count += 1;
    await store.set('visits', String(count));
  }

  return Response.json(
    { count },
    { headers: { 'cache-control': 'no-store' } },
  );
};

export const config = { path: '/api/visits' };
