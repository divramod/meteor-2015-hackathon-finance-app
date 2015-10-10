// =========== [ transactions delte route ] ===========
Router.map(function() {
  this.route('/transactions/:_id/delete', function() {
    var entity = transactions.findOne({
      _id: this.params._id
    });
    this.title = "routes.transactions.delete";
    this.render('transactionsUpdate', {
      data: entity
    });
  });
});
