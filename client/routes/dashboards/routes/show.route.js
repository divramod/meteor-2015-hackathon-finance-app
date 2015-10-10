// =========== [ dashboards show route ] ===========
Router.map(function() {
  this.route('/dashboards/:_id/show', function() {
    var entity = dashboards.findOne({
      _id: this.params._id
    });
    this.title = "routes.dashboards.show";
    this.render('dashboardsShow', {
      data: entity
    });
  });
});
