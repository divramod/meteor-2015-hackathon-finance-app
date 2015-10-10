// =========== [ transactions methods ] ===========
Meteor.methods({
  // =========== [ transactionsInsert ] ===========
  transactionsInsert: function(doc) {
    // common fields
    doc.owner = Meteor.userId();
    doc.creator = Meteor.userId();
    doc.createdAt = new Date();

    transactions.insert(doc);
  },
  // =========== [ transactionsUpdate] ===========
  transactionsUpdate: function(doc, id) {
    transactions.update(id, doc);
  },
  // =========== [ transactionsRemove ] ===========
  transactionsRemove: function(id) {
    transactions.remove(id);
  },
  // =========== [ transactionsFind ] ===========
  transactionsFind: function(search) {
    transactions.find(search);
  },
  // =========== [ transactionsFind ] ===========
  transactionsFetch: function(search) {
    transactions.fetch(search);
  }
});
