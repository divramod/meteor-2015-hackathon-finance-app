// =========== [ groups edit route ] ===========
Router.map(function() {
  this.route('groups/list/all', {
    path: '/groups/list/all',
    template: 'groupsListAll',
    data: {
      title: "routes.groups.list.all"
    }
  });
});
