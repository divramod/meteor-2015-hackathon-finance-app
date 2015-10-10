// =========== [ areas delte route ] ===========
Router.map(function() {
  this.route('/areas/:_id/delete', function() {
    var entity = areas.findOne({
      _id: this.params._id
    });
    this.title = "routes.areas.delete";
    this.render('areasUpdate', {
      data: entity
    });
  });
});
