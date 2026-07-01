// Canonical base URL for the site. On Netlify, prefer the URL of the actual
// deploy (DEPLOY_PRIME_URL for branch/preview deploys, URL for production) so
// absolute URLs — canonical links, og:image, sitemap entries — resolve on the
// same host that serves the page. Falls back to the production domain locally.
export const SITE_URL =
  process.env.DEPLOY_PRIME_URL ||
  process.env.URL ||
  "https://twdyagency.com";
