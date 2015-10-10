// =========== [ dashboards methods ] ===========
Meteor.methods({
  // =========== [ dashboardsInsert ] ===========
  dashboardsInsert: function(doc) {
    // common fields
    doc.owner = Meteor.userId();
    doc.creator = Meteor.userId();
    doc.createdAt = new Date();

    dashboards.insert(doc);
  },
  // =========== [ dashboardsUpdate] ===========
  dashboardsUpdate: function(doc, id) {
    dashboards.update(id, doc);
  },
  // =========== [ dashboardsRemove ] ===========
  dashboardsRemove: function(id) {
    dashboards.remove(id);
  },
  // =========== [ dashboardsFind ] ===========
  dashboardsFind: function(search) {
    dashboards.find(search);
  },
  // =========== [ dashboardsFind ] ===========
  dashboardsFetch: function(search) {
    dashboards.fetch(search);
  }
});
