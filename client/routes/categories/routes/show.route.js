// =========== [ categories show route ] ===========
Router.map(function() {
  this.route('/categories/:_id/show', function() {
    var entity = categories.findOne({
      _id: this.params._id
    });
    this.title = "routes.categories.show";
    this.render('categoriesShow', {
      data: entity
    });
  });
});
