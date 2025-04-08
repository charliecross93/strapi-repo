module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/catch-reports',
        handler: 'catchreport.find',
        config: { policies: [] },
      },
      {
        method: 'GET',
        path: '/catch-reports/:id',
        handler: 'catchreport.findOne',
        config: { policies: [] },
      },
      {
        method: 'POST',
        path: '/catch-reports',
        handler: 'catchreport.create',
        config: { policies: [] },
      },
      {
        method: 'PUT',
        path: '/catch-reports/:id',
        handler: 'catchreport.update',
        config: { policies: [] },
      },
      {
        method: 'DELETE',
        path: '/catch-reports/:id',
        handler: 'catchreport.delete',
        config: { policies: [] },
      }
    ]
  };
  