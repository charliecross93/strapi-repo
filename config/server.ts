// config/server.ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // — your public‑facing URL so Strapi generates correct links & CSP:
  url: env('STRAPI_PUBLIC_URL', 'https://staging.fishplanner.com'),

  // — trust the proxy headers (X‑Forwarded‑For, X‑Forwarded‑Proto):
  proxy: {
    enabled: true,
  },

  // — serve the admin UI under /admin (not at root)
  admin: {
    path: '/admin',
  },

  app: {
    keys: env.array('APP_KEYS', [
      'mySecretKey1',
      'mySecretKey2',
    ]),
  },
});
