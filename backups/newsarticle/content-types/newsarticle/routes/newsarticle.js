module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/news-articles',
        handler: 'newsarticle.find',
        config: { policies: [] },
      },
      {
        method: 'GET',
        path: '/news-articles/:id',
        handler: 'newsarticle.findOne',
        config: { policies: [] },
      },
      {
        method: 'POST',
        path: '/news-articles',
        handler: 'newsarticle.create',
        config: { policies: [] },
      },
      {
        method: 'PUT',
        path: '/news-articles/:id',
        handler: 'newsarticle.update',
        config: { policies: [] },
      },
      {
        method: 'DELETE',
        path: '/news-articles/:id',
        handler: 'newsarticle.delete',
        config: { policies: [] },
      }
    ]
  };
  