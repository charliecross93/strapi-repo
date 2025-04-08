export default ({ env }) => ({
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
