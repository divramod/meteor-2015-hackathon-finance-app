// =========== [ groups home route ] ===========
Router.map(function() {
  this.route('groups', {
    path: '/groups',
    template: 'groupsHome',
    data: {
      title: "routes.groups.home"
    }
  });
});
