// =========== [ areas home route ] ===========
Router.map(function() {
  this.route('areas', {
    path: '/areas',
    template: 'areasHome',
    data: {
      title: "routes.areas.home"
    }
  });
});
