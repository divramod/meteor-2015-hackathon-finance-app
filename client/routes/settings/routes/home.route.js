// =========== [ settings home route ] ===========
Router.map(function() {
  this.route('settings', {
    path: '/settings',
    template: 'settingsHome',
    data: {
      title: "routes.settings.home"
    }
  });
});
