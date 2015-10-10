// =========== [ areas edit route ] ===========
Router.map(function() {
  this.route('areas/list/all', {
    path: '/areas/list/all',
    template: 'areasListAll',
    data: {
      title: "routes.areas.list.all"
    }
  });
});
