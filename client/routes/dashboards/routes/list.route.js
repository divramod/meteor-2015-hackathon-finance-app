// =========== [ dashboards edit route ] ===========
Router.map(function() {
  this.route('dashboards/list/all', {
    path: '/dashboards/list/all',
    template: 'dashboardsListAll',
    data: {
      title: "routes.dashboards.list.all"
    }
  });
});
