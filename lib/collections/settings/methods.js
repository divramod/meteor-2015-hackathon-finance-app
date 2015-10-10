// =========== [ settings methods ] ===========
Meteor.methods({
  // =========== [ settingsInsert ] ===========
  settingsInsert: function(doc) {
    // common fields
    doc.owner = Meteor.userId();
    doc.creator = Meteor.userId();
    doc.createdAt = new Date();

    settings.insert(doc);
  },
  // =========== [ settingsUpdate] ===========
  settingsUpdate: function(doc, id) {
    settings.update(id, doc);
  },
  // =========== [ settingsRemove ] ===========
  settingsRemove: function(id) {
    settings.remove(id);
  },
  // =========== [ settingsFind ] ===========
  settingsFind: function(search) {
    settings.find(search);
  },
  // =========== [ settingsFind ] ===========
  settingsFetch: function(search) {
    settings.fetch(search);
  }
});
