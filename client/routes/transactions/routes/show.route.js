// =========== [ transactions show route ] ===========
Router.map(function() {
  this.route('/transactions/:_id/show', function() {
    var entity = transactions.findOne({
      _id: this.params._id
    });
    this.title = "routes.transactions.show";
    this.render('transactionsShow', {
      data: entity
    });
  });
});
