// config/admin.ts
export default ({ env }) => ({
  // mount the admin panel at /cms instead of /admin
  serveAdminPanel: true,
  path: '/cms',

  auth: {
    secret: env('STRAPI_ADMIN_JWT_SECRET'),
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },

  build: {
    publicPath: '/cms/',
  },
});
