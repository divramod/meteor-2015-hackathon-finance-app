// =========== [ categories home route ] ===========
Router.map(function() {
  this.route('categories/new', {
    path: '/categories/new',
    template: 'categoriesNew',
    data: {
      title: "routes.categories.new"
    }
  });
});
