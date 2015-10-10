// =========== [ transactions home route ] ===========
Router.map(function() {
  this.route('transactions/new', {
    path: '/transactions/new',
    template: 'transactionsNew',
    data: {
      title: "routes.transactions.new"
    }
  });
});
