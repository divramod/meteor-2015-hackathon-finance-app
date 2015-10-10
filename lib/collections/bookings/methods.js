// =========== [ bookings methods ] ===========
Meteor.methods({
  // =========== [ bookingsInsert ] ===========
  bookingsInsert: function(doc) {
    // common fields
    doc.owner = Meteor.userId();
    doc.creator = Meteor.userId();
    doc.createdAt = new Date();

    bookings.insert(doc);
  },
  // =========== [ bookingsUpdate] ===========
  bookingsUpdate: function(doc, id) {
    bookings.update(id, doc);
  },
  // =========== [ bookingsRemove ] ===========
  bookingsRemove: function(id) {
    bookings.remove(id);
  },
  // =========== [ bookingsFind ] ===========
  bookingsFind: function(search) {
    bookings.find(search);
  },
  // =========== [ bookingsFind ] ===========
  bookingsFetch: function(search) {
    bookings.fetch(search);
  }
});
