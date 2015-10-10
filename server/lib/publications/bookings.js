// =========== [ bookings publis ] ===========
Meteor.publish("bookings", function () {
    return bookings.find();
});
