// =========== [ settings show route ] ===========
Router.map(function() {
  this.route('/settings/:_id/show', function() {
    var entity = settings.findOne({
      _id: this.params._id
    });
    this.title = "routes.settings.show";
    this.render('settingsShow', {
      data: entity
    });
  });
});
