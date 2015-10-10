// =========== [ transactions edit route ] ===========
Router.map(function() {
  this.route('transactions/list/all', {
    path: '/transactions/list/all',
    template: 'transactionsListAll',
    data: {
      title: "routes.transactions.list.all"
    }
  });
});
