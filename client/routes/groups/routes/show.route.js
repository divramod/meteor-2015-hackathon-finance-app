// =========== [ groups show route ] ===========
Router.map(function() {
  this.route('/groups/:_id/show', function() {
    var entity = groups.findOne({
      _id: this.params._id
    });
    this.title = "routes.groups.show";
    this.render('groupsShow', {
      data: entity
    });
  });
});
