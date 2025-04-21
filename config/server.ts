// config/server.ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // public URL for Strapi to generate correct links
  url: env('STRAPI_PUBLIC_URL', 'https://staging.fishplanner.com'),

  // trust the Nginx proxy headers
  proxy: {
    enabled: true,
  },

  // mount the admin UI at /admin
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
