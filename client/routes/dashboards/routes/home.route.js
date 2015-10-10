// =========== [ dashboards home route ] ===========
Router.map(function() {
  this.route('dashboards', {
    path: '/dashboards',
    template: 'dashboardsHome',
    data: {
      title: "routes.dashboards.home"
    }
  });
});
