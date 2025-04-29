// config/admin.ts
export default ({ env }) => ({
  // the backend host that serves /api and /admin
  url: env('STRAPI_ADMIN_BACKEND_URL', 'https://api.staging.fishplanner.com'),

  // serve the Admin UI at /admin on that host
  serveAdminPanel: true,

  // static assets live under /admin/
  build: {
    publicPath: '/admin/',
  },

  auth: {
    secret: env('STRAPI_ADMIN_JWT_SECRET'),
  },

  apiToken: {
    salt: env('API_TOKEN_SALT', '…'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '…'),
    },
  },

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
