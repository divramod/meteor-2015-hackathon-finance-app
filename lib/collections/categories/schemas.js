// =========== [ categories default schema ] ===========
categoriesSchema = new SimpleSchema({
  value: {
    type: String,
    optional: false
  },
  number: {
    type: String,
    optional: false
  },
  icon: {
    type: String,
    optional: false
  },
  active: {
    type: Boolean,
    optional: false
  }
});

// =========== [ categories default schema i18n ] ===========
Meteor.startup(function() {
  categoriesSchema.i18n("schemas.categories");
  categories.attachSchema(categoriesSchema);
});
