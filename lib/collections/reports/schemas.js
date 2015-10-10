// =========== [ reports default schema ] ===========
reportsSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false
  }
});

// =========== [ reports default schema i18n ] ===========
Meteor.startup(function() {
  reportsSchema.i18n("schemas.reports");
  reports.attachSchema(reportsSchema);
});
