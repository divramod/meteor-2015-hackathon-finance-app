// =========== [ dashboards delte route ] ===========
Router.map(function() {
  this.route('/dashboards/:_id/delete', function() {
    var entity = dashboards.findOne({
      _id: this.params._id
    });
    this.title = "routes.dashboards.delete";
    this.render('dashboardsUpdate', {
      data: entity
    });
  });
});
