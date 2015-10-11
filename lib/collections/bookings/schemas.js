// =========== [ bookings default schema ] ===========
bookingsSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false
  }
});

// =========== [ bookings default schema i18n ] ===========
Meteor.startup(function() {
  bookingsSchema.i18n("schemas.bookings");
  bookings.attachSchema(bookingsSchema);
});
