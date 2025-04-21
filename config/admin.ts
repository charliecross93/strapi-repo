// config/admin.ts
export default ({ env }) => ({
  // — mount the admin panel at /admin
  serveAdminPanel: true,
  path: '/admin',

  // — if your proxy or CORS setup means the UI needs to know its own backend URL:
  backendUrl: env('STRAPI_PUBLIC_URL', 'https://staging.fishplanner.com'),

  // — your existing auth / token / flags settings:
  auth: {
    secret: env('STRAPI_ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'CjS8IQNp8acHGIWR5RU6Xw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'defaultTransferSalt'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
