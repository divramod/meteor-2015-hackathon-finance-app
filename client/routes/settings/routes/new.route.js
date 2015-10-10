// =========== [ settings home route ] ===========
Router.map(function() {
  this.route('settings/new', {
    path: '/settings/new',
    template: 'settingsNew',
    data: {
      title: "routes.settings.new"
    }
  });
});
