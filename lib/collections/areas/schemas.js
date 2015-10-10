// =========== [ areas default schema ] ===========
areasSchema = new SimpleSchema({
  name: {
    type: String,
    optional: false
  },
  group:{
  	type:String,
  	optional:false
  },
  icon:{
  	type:String,
  	optional:false
  }


});

// =========== [ areas default schema i18n ] ===========
Meteor.startup(function() {
  areasSchema.i18n("schemas.areas");
  areas.attachSchema(areasSchema);
});
