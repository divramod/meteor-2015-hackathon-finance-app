// =========== [ dashboards default schema ] ===========
dashboardsSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false
  }
});

// =========== [ dashboards default schema i18n ] ===========
Meteor.startup(function() {
  dashboardsSchema.i18n("schemas.dashboards");
  dashboards.attachSchema(dashboardsSchema);
});
