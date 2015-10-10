// =========== [ areas home route ] ===========
Router.map(function() {
  this.route('areas/new', {
    path: '/areas/new',
    template: 'areasNew',
    data: {
      title: "routes.areas.new"
    }
  });
});
