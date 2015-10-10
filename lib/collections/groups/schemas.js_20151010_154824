// =========== [ groups default schema ] ===========
groupsSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false
  }
});

// =========== [ groups default schema i18n ] ===========
Meteor.startup(function() {
  groupsSchema.i18n("schemas.groups");
  groups.attachSchema(groupsSchema);
});
