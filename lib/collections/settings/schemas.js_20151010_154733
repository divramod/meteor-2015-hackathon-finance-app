// =========== [ settings default schema ] ===========
settingsSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false
  }
});

// =========== [ settings default schema i18n ] ===========
Meteor.startup(function() {
  settingsSchema.i18n("schemas.settings");
  settings.attachSchema(settingsSchema);
});
