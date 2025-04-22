// config/server.ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // so Strapi builds correct absolute URLs
  url: env('STRAPI_PUBLIC_URL', 'https://staging.fishplanner.com'),

  // we’re behind an Nginx proxy
  proxy: { enabled: true },

  // mount the Strapi Admin UI under /admin
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
