// =========== [ categories edit route ] ===========
Router.map(function() {
  this.route('categories/list/all', {
    path: '/categories/list/all',
    template: 'categoriesListAll',
    data: {
      title: "routes.categories.list.all"
    }
  });
});
