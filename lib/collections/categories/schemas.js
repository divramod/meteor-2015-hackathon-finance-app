// =========== [ categories default schema ] ===========
categoriesSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false
  }
});

// =========== [ categories default schema i18n ] ===========
Meteor.startup(function() {
  categoriesSchema.i18n("schemas.categories");
  categories.attachSchema(categoriesSchema);
});
