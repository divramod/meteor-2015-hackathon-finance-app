// =========== [ categories edit route ] ===========
Router.map(function() {
  this.route('/categories/:_id/edit', function() {
    var entity = categories.findOne({
      _id: this.params._id
    });
    this.title = "routes.categories.edit";
    this.render('categoriesEdit', {
      data: entity
    });
  });
});
