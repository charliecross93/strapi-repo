module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/fishing-calendar',
        handler: 'fishingcalendar.find',
        config: { policies: [] },
      },
      {
        method: 'GET',
        path: '/fishing-calendar/:id',
        handler: 'fishingcalendar.findOne',
        config: { policies: [] },
      },
      {
        method: 'POST',
        path: '/fishing-calendar',
        handler: 'fishingcalendar.create',
        config: { policies: [] },
      },
      {
        method: 'PUT',
        path: '/fishing-calendar/:id',
        handler: 'fishingcalendar.update',
        config: { policies: [] },
      },
      {
        method: 'DELETE',
        path: '/fishing-calendar/:id',
        handler: 'fishingcalendar.delete',
        config: { policies: [] },
      }
    ]
  };
  