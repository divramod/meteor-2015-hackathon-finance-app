// =========== [ areas default schema ] ===========
areasSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false
  }
});

// =========== [ areas default schema i18n ] ===========
Meteor.startup(function() {
  areasSchema.i18n("schemas.areas");
  areas.attachSchema(areasSchema);
});
