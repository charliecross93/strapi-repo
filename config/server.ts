// config/server.ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // your public‑facing URL (used for redirects/CORS/etc)
  url: env('STRAPI_PUBLIC_URL', 'https://staging.fishplanner.com'),

  // trust the Nginx proxy
  proxy: {
    enabled: true,
  },

  // mount the admin UI at /admin
  admin: {
    serveAdminPanel: true,
    path: '/admin',
  },

  app: {
    keys: env.array('APP_KEYS', [
      'mySecretKey1',
      'mySecretKey2',
    ]),
  },
});
