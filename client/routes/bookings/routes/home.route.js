// =========== [ bookings home route ] ===========
Router.map(function() {
  this.route('bookings', {
    path: '/bookings',
    template: 'bookingsHome',
    data: {
      title: "routes.bookings.home"
    }
  });
});
