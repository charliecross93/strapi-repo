module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/business',
        handler: 'business.find',
        config: { policies: [] },
      },
      {
        method: 'GET',
        path: '/business/:id',
        handler: 'business.findOne',
        config: { policies: [] },
      },
      {
        method: 'POST',
        path: '/business',
        handler: 'business.create',
        config: { policies: [] },
      },
      {
        method: 'PUT',
        path: '/business/:id',
        handler: 'business.update',
        config: { policies: [] },
      },
      {
        method: 'DELETE',
        path: '/business/:id',
        handler: 'business.delete',
        config: { policies: [] },
      }
    ]
  };
  