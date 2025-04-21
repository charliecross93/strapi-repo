// config/server.ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // trust the proxy headers
  proxy: {
    enabled: true,
  },

  // mount the admin UI here
  admin: {
    path: '/admin',
  },

  app: {
    keys: env.array('APP_KEYS', ['mySecretKey1', 'mySecretKey2']),
  },
});
