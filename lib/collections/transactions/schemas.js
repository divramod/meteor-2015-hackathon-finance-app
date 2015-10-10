// =========== [ transactions default schema ] ===========
transactionsSchema = new SimpleSchema({
  booking_id: {
    type: [String],
    optional: false
  },
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
  }, 
  booked: {
    type: Boolean,
  },
});

// =========== [ transactions default schema i18n ] ===========
Meteor.startup(function() {
  transactionsSchema.i18n("schemas.transactions");
  transactions.attachSchema(transactionsSchema);
});
