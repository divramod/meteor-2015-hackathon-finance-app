// =========== [ accounts edit route ] ===========
Router.map(function() {
  this.route('/accounts/:_id/edit', function() {
    var entity = accounts.findOne({
      _id: this.params._id
    });
    this.title = "routes.accounts.edit";
    this.render('accountsEdit', {
      data: entity
    });
  });
});
