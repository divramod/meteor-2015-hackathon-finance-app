// =========== [ bookings edit route ] ===========
Router.map(function() {
  this.route('/bookings/:_id/edit', function() {
    var entity = bookings.findOne({
      _id: this.params._id
    });
    this.title = "routes.bookings.edit";
    this.render('bookingsEdit', {
      data: entity
    });
  });
});
