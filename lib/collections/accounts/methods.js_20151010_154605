// =========== [ accounts methods ] ===========
Meteor.methods({
  // =========== [ accountsInsert ] ===========
  accountsInsert: function(doc) {
    // common fields
    doc.owner = Meteor.userId();
    doc.creator = Meteor.userId();
    doc.createdAt = new Date();

    accounts.insert(doc);
  },
  // =========== [ accountsUpdate] ===========
  accountsUpdate: function(doc, id) {
    accounts.update(id, doc);
  },
  // =========== [ accountsRemove ] ===========
  accountsRemove: function(id) {
    accounts.remove(id);
  },
  // =========== [ accountsFind ] ===========
  accountsFind: function(search) {
    accounts.find(search);
  },
  // =========== [ accountsFind ] ===========
  accountsFetch: function(search) {
    accounts.fetch(search);
  }
});
