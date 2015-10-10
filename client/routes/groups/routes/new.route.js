// =========== [ groups home route ] ===========
Router.map(function() {
  this.route('groups/new', {
    path: '/groups/new',
    template: 'groupsNew',
    data: {
      title: "routes.groups.new"
    }
  });
});
