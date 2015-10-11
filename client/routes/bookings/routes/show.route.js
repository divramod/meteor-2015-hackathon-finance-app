// =========== [ bookings show route ] ===========
Router.map(function() {
  this.route('/bookings/:_id/show', function() {
    var entity = bookings.findOne({
      _id: this.params._id
    });
    this.title = "routes.bookings.show";
    this.render('bookingsShow', {
      data: entity
    });
  });
});
