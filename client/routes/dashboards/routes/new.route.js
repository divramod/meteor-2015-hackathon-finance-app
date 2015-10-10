// =========== [ dashboards home route ] ===========
Router.map(function() {
  this.route('dashboards/new', {
    path: '/dashboards/new',
    template: 'dashboardsNew',
    data: {
      title: "routes.dashboards.new"
    }
  });
});
