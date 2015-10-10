// =========== [ transactions default schema ] ===========
transactionsSchema = new SimpleSchema({
  title: {
    type: String,
    optional: false
  }
});

// =========== [ transactions default schema i18n ] ===========
Meteor.startup(function() {
  transactionsSchema.i18n("schemas.transactions");
  transactions.attachSchema(transactionsSchema);
});
