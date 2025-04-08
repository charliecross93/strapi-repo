module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/fishing-spots',
        handler: 'fishingspot.find',
        config: { policies: [] },
      },
      {
        method: 'GET',
        path: '/fishing-spots/:id',
        handler: 'fishingspot.findOne',
        config: { policies: [] },
      },
      {
        method: 'POST',
        path: '/fishing-spots',
        handler: 'fishingspot.create',
        config: { policies: [] },
      },
      {
        method: 'PUT',
        path: '/fishing-spots/:id',
        handler: 'fishingspot.update',
        config: { policies: [] },
      },
      {
        method: 'DELETE',
        path: '/fishing-spots/:id',
        handler: 'fishingspot.delete',
        config: { policies: [] },
      }
    ]
  };
  