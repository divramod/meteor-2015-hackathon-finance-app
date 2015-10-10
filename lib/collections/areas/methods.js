// =========== [ areas methods ] ===========
Meteor.methods({
  // =========== [ areasInsert ] ===========
  areasInsert: function(doc) {
    // common fields
    doc.owner = Meteor.userId();
    doc.creator = Meteor.userId();
    doc.createdAt = new Date();

    areas.insert(doc);
  },
  // =========== [ areasUpdate] ===========
  areasUpdate: function(doc, id) {
    areas.update(id, doc);
  },
  // =========== [ areasRemove ] ===========
  areasRemove: function(id) {
    areas.remove(id);
  },
  // =========== [ areasFind ] ===========
  areasFind: function(search) {
    areas.find(search);
  },
  // =========== [ areasFind ] ===========
  areasFetch: function(search) {
    areas.fetch(search);
  }
});
