// =========== [ bookings home route ] ===========
Router.map(function() {
  this.route('bookings/new', {
    path: '/bookings/new',
    template: 'bookingsNew',
    data: {
      title: "routes.bookings.new"
    }
  });
});
