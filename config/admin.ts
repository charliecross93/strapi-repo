// config/admin.ts
export default ({ env }) => ({
  // tell the Admin UI which backend to call for its API requests
  url: env('STRAPI_ADMIN_BACKEND_URL', 'https://staging.fishplanner.com'),

  // serve the built admin panel under /admin
  serveAdminPanel: true,

  // where the admin’s static files will be served from
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
