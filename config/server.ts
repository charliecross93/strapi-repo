export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // <-- your public URL so Strapi builds correct links -->
  url: env('STRAPI_PUBLIC_URL', 'https://staging.fishplanner.com'),

  // <-- trust the proxy headers -->
  proxy: {
    enabled: true,
  },

  // <-- this is the new bit: serve the Admin UI at /admin -->
  admin: {
    path: '/admin',
  },

  app: {
    keys: env.array('APP_KEYS', ['mySecretKey1','mySecretKey2']),
  },
});
