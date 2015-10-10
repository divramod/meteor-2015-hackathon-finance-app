// =========== [ areas show route ] ===========
Router.map(function() {
  this.route('/areas/:_id/show', function() {
    var entity = areas.findOne({
      _id: this.params._id
    });
    this.title = "routes.areas.show";
    this.render('areasShow', {
      data: entity
    });
  });
});
