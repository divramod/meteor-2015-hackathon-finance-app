// =========== [ settings edit route ] ===========
Router.map(function() {
  this.route('settings/list/all', {
    path: '/settings/list/all',
    template: 'settingsListAll',
    data: {
      title: "routes.settings.list.all"
    }
  });
});
