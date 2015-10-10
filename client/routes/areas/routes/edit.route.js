// =========== [ areas edit route ] ===========
Router.map(function() {
  this.route('/areas/:_id/edit', function() {
    var entity = areas.findOne({
      _id: this.params._id
    });
    this.title = "routes.areas.edit";
    this.render('areasEdit', {
      data: entity
    });
  });
});
