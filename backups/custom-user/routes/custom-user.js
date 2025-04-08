module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/users/:id',
        handler: 'custom-user.findOne',
        config: { policies: [] },
      },
      {
        method: 'PUT',
        path: '/users/:id',
        handler: 'custom-user.update',
        config: { policies: [] },
      },
      {
        method: 'DELETE',
        path: '/users/:id',
        handler: 'custom-user.delete',
        config: { policies: [] },
      }
    ]
  };
  