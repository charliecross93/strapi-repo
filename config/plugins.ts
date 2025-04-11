export default ({ env }) => ({
    'users-permissions': {
      enabled: true,
      config: {
        jwtSecret: env('JWT_SECRET'),
        // Other configuration options can go here if needed.
      },
    },
  });
  