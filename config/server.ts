export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // tell Strapi its public‑facing URL (so redirects, links, CORS, etc. are correct)
  url: env('STRAPI_PUBLIC_URL'),

  // trust the proxy headers (X‑Forwarded‑For, X‑Forwarded‑Proto)
  proxy: {
    enabled: true,
  },

  app: {
    // your existing APP_KEYS
    keys: env.array('APP_KEYS', ['mySecretKey1', 'mySecretKey2']),
  },
});
