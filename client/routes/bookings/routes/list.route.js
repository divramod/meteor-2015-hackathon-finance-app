// =========== [ bookings edit route ] ===========
Router.map(function() {
  this.route('bookings/list/all', {
    path: '/bookings/list/all',
    template: 'bookingsListAll',
    data: {
      title: "routes.bookings.list.all"
    }
  });
});
