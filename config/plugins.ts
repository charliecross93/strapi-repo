// config/plugins.js
console.log('🔔 [plugins.js] — loading plugin configuration');

module.exports = ({ env }) => ({
  // Users & Permissions plugin must be here, enabled
  'users-permissions': {
    enabled: true,
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  // …other plugin configs if you have them
});
