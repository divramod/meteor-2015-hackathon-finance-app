// =========== [ settings delte route ] ===========
Router.map(function() {
  this.route('/settings/:_id/delete', function() {
    var entity = settings.findOne({
      _id: this.params._id
    });
    this.title = "routes.settings.delete";
    this.render('settingsUpdate', {
      data: entity
    });
  });
});
