// =========== [ categories methods ] ===========
Meteor.methods({
  // =========== [ categoriesInsert ] ===========
  categoriesInsert: function(doc) {
    // common fields
    doc.owner = Meteor.userId();
    doc.creator = Meteor.userId();
    doc.createdAt = new Date();

    categories.insert(doc);
  },
  // =========== [ categoriesUpdate] ===========
  categoriesUpdate: function(doc, id) {
    categories.update(id, doc);
  },
  // =========== [ categoriesRemove ] ===========
  categoriesRemove: function(id) {
    categories.remove(id);
  },
  // =========== [ categoriesFind ] ===========
  categoriesFind: function(search) {
    categories.find(search);
  },
  // =========== [ categoriesFind ] ===========
  categoriesFetch: function(search) {
    categories.fetch(search);
  }
});
