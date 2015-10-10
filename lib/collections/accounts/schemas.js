// =========== [ accounts default schema ] ===========
accountsSchema = new SimpleSchema({
  name: {
    type: String,
    optional: false
  },
  owner: {
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
  type:{
  	type: String,
  	allowedValues:['Creditcard','Bank Account','Cash','Bitcoin','PayPal'],
  	optional:false
  }
});

// =========== [ accounts default schema i18n ] ===========
Meteor.startup(function() {
  accountsSchema.i18n("schemas.accounts");
  accounts.attachSchema(accountsSchema);
});
