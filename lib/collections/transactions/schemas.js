// =========== [ transactions default schema ] ===========
transactionsSchema = new SimpleSchema({
  value: {
    type: Number,
    optional: false
  },
  user_id: {
    type: String,
    optional: false,
    autoValue: function() {
        if (this.isInsert) {
          if (! this.isTrusted) {
            return this.userId;
          }
        } else {
          this.unset();
        }
      }
  },
  account_id: {
    type: String,
    optional: false
  }
});

// =========== [ transactions default schema i18n ] ===========
Meteor.startup(function() {
  transactionsSchema.i18n("schemas.transactions");
  transactions.attachSchema(transactionsSchema);
});
