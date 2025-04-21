// config/admin.ts
export default ({ env }) => ({
  // your existing auth / tokens / flags…
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

  // serve the admin panel under /admin
  serveAdminPanel: true,
  build: {
    publicPath: '/admin/',
  },
});
