// =========== [ bookings default schema ] ===========
bookingsSchema = new SimpleSchema({
  factor: {
    type: Number,
    optional: false
  },
  cat_id: {
    type: String,
    optional: false
  },
  area_id:{
  	type:String,
  	optional:false
  },	
  tx_id: {
  	type:String,
  	optional:true
  },
  user_id:{
  	type:String,
  	autoValue: function() {
        if (this.isInsert) {
          if (! this.isTrusted) {
            return this.userId;
          }
        } else {
          this.unset();
        }
      }
  }
});

// =========== [ bookings default schema i18n ] ===========
Meteor.startup(function() {
  bookingsSchema.i18n("schemas.bookings");
  bookings.attachSchema(bookingsSchema);
});
