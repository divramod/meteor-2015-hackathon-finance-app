// =========== [ dashboards edit route ] ===========
Router.map(function() {
  this.route('/dashboards/:_id/edit', function() {
    var entity = dashboards.findOne({
      _id: this.params._id
    });
    this.title = "routes.dashboards.edit";
    this.render('dashboardsEdit', {
      data: entity
    });
  });
});
