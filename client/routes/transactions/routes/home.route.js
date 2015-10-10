// =========== [ transactions home route ] ===========
Router.map(function() {
  this.route('transactions', {
    path: '/transactions',
    template: 'transactionsHome',
    data: {
      title: "routes.transactions.home"
    }
  });
});
