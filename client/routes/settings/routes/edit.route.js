// =========== [ settings edit route ] ===========
Router.map(function() {
  this.route('/settings/:_id/edit', function() {
    var entity = settings.findOne({
      _id: this.params._id
    });
    this.title = "routes.settings.edit";
    this.render('settingsEdit', {
      data: entity
    });
  });
});
