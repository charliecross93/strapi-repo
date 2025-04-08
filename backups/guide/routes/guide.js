module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/guides',
        handler: 'guide.find',
        config: { policies: [] },
      },
      {
        method: 'GET',
        path: '/guides/:id',
        handler: 'guide.findOne',
        config: { policies: [] },
      },
      {
        method: 'POST',
        path: '/guides',
        handler: 'guide.create',
        config: { policies: [] },
      },
      {
        method: 'PUT',
        path: '/guides/:id',
        handler: 'guide.update',
        config: { policies: [] },
      },
      {
        method: 'DELETE',
        path: '/guides/:id',
        handler: 'guide.delete',
        config: { policies: [] },
      }
    ]
  };
  