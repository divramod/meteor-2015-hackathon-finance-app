// =========== [ groups delte route ] ===========
Router.map(function() {
  this.route('/groups/:_id/delete', function() {
    var entity = groups.findOne({
      _id: this.params._id
    });
    this.title = "routes.groups.delete";
    this.render('groupsUpdate', {
      data: entity
    });
  });
});
