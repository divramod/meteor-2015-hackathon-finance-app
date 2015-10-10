// =========== [ groups default schema ] ===========
groupsSchema = new SimpleSchema({
  name: {
    type: String,
    optional: false
  },
  creator: {
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
  members: {
    type: [String],
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
  }
});

// =========== [ groups default schema i18n ] ===========
Meteor.startup(function() {
  groupsSchema.i18n("schemas.groups");
  groups.attachSchema(groupsSchema);
});
