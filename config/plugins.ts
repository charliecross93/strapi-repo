// config/plugins.js
console.log('🔔 plugins.js is loading—users-permissions enabled');
module.exports = ({ env }) => ({
  'users-permissions': {
    enabled: true,
    config: {
      jwtSecret: env('JWT_SECRET'),
      // any other options…
    },
  },
  // you can leave other plugins here if needed
});
