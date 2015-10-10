// =========== [ categories home route ] ===========
Router.map(function() {
  this.route('categories', {
    path: '/categories',
    template: 'categoriesHome',
    data: {
      title: "routes.categories.home"
    }
  });
});
