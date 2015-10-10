// =========== [ reports methods ] ===========
Meteor.methods({
  // =========== [ reportsInsert ] ===========
  reportsInsert: function(doc) {
    // common fields
    doc.owner = Meteor.userId();
    doc.creator = Meteor.userId();
    doc.createdAt = new Date();

    reports.insert(doc);
  },
  // =========== [ reportsUpdate] ===========
  reportsUpdate: function(doc, id) {
    reports.update(id, doc);
  },
  // =========== [ reportsRemove ] ===========
  reportsRemove: function(id) {
    reports.remove(id);
  },
  // =========== [ reportsFind ] ===========
  reportsFind: function(search) {
    reports.find(search);
  },
  // =========== [ reportsFind ] ===========
  reportsFetch: function(search) {
    reports.fetch(search);
  }
});
