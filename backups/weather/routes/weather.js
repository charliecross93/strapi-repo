module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/weather',
        handler: 'weather.find',
        config: { policies: [] },
      }
    ]
  };
  