// =========== [ reports home route ] ===========
Router.map(function() {
  this.route('reports', {
    path: '/reports',
    template: 'reportsHome',
    data: {
      title: "routes.reports.home"
    }
  });
});
