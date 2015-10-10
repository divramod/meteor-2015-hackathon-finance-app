// =========== [ accounts show route ] ===========
Router.map(function() {
  this.route('/accounts/:_id/show', function() {
    var entity = accounts.findOne({
      _id: this.params._id
    });
    this.title = "routes.accounts.show";
    this.render('accountsShow', {
      data: entity
    });
  });
});
