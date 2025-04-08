export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Using default keys if APP_KEYS is not set in the environment.
    keys: env.array('APP_KEYS', ['mySecretKey1', 'mySecretKey2']),
  },
});
