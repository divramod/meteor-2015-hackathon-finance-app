// =========== [ groups default schema ] ===========
groupsSchema = new SimpleSchema({
  name: {
    type: String,
    optional: false
  },
  members: {
    type: String,
    optional: false
  },
  creator: {
    type: String,
    optional: false
  },
  owner: {
    type: String,
    optional: false
  },
  members: {
    type: [String],
    optional: false
  }
});

// =========== [ groups default schema i18n ] ===========
Meteor.startup(function() {
  groupsSchema.i18n("schemas.groups");
  groups.attachSchema(groupsSchema);
});
