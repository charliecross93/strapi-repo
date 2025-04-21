// config/server.ts
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_PUBLIC_URL', 'https://staging.fishplanner.com'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['mySecretKey1','mySecretKey2']),
  },
});
