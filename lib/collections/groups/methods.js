// =========== [ groups methods ] ===========
Meteor.methods({
  // =========== [ groupsInsert ] ===========
  groupsInsert: function(doc) {
    // common fields
    doc.owner = Meteor.userId();
    doc.creator = Meteor.userId();
    doc.createdAt = new Date();

    groups.insert(doc);
  },
  // =========== [ groupsUpdate] ===========
  groupsUpdate: function(doc, id) {
    groups.update(id, doc);
  },
  // =========== [ groupsRemove ] ===========
  groupsRemove: function(id) {
    groups.remove(id);
  },
  // =========== [ groupsFind ] ===========
  groupsFind: function(search) {
    groups.find(search);
  },
  // =========== [ groupsFind ] ===========
  groupsFetch: function(search) {
    groups.fetch(search);
  }
});
