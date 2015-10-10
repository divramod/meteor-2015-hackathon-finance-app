// =========== [ categories delte route ] ===========
Router.map(function() {
  this.route('/categories/:_id/delete', function() {
    var entity = categories.findOne({
      _id: this.params._id
    });
    this.title = "routes.categories.delete";
    this.render('categoriesUpdate', {
      data: entity
    });
  });
});
