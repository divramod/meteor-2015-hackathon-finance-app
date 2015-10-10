// =========== [ groups edit route ] ===========
Router.map(function() {
  this.route('/groups/:_id/edit', function() {
    var entity = groups.findOne({
      _id: this.params._id
    });
    this.title = "routes.groups.edit";
    this.render('groupsEdit', {
      data: entity
    });
  });
});
