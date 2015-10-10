// =========== [ transactions edit route ] ===========
Router.map(function() {
  this.route('/transactions/:_id/edit', function() {
    var entity = transactions.findOne({
      _id: this.params._id
    });
    this.title = "routes.transactions.edit";
    this.render('transactionsEdit', {
      data: entity
    });
  });
});
