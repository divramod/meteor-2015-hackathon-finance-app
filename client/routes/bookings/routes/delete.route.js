// =========== [ bookings delte route ] ===========
Router.map(function() {
  this.route('/bookings/:_id/delete', function() {
    var entity = bookings.findOne({
      _id: this.params._id
    });
    this.title = "routes.bookings.delete";
    this.render('bookingsUpdate', {
      data: entity
    });
  });
});
