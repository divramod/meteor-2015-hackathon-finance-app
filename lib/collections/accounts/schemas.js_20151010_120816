// =========== [ accounts default schema ] ===========
accountsSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false
  }
});

// =========== [ accounts default schema i18n ] ===========
Meteor.startup(function() {
  accountsSchema.i18n("schemas.accounts");
  accounts.attachSchema(accountsSchema);
});
