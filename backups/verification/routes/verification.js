module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/verification/send',
        handler: 'verification.send',
        config: { policies: [] },
      },
      {
        method: 'POST',
        path: '/verification/verify',
        handler: 'verification.verify',
        config: { policies: [] },
      }
    ]
  };
  