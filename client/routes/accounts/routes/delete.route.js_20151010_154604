// =========== [ accounts delte route ] ===========
Router.map(function() {
  this.route('/accounts/:_id/delete', function() {
    var entity = accounts.findOne({
      _id: this.params._id
    });
    this.title = "routes.accounts.delete";
    this.render('accountsUpdate', {
      data: entity
    });
  });
});
