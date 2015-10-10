// =========== [ transactions allow ] ===========
transactions.allow({
  // =========== [ insert ] ===========
  insert: function(userId) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("transactionsInsert not-authorized because not logged in!");
    } else {
      return true;
    }
  },
  // =========== [ update ] ===========
  update: function(userId, doc) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("transactionsUpdate not-authorized because not logged in!");
    } else {
      if (Meteor.userId() !== doc.owner) {
        throw new Meteor.Error("transactionsUpdate not-authorized because not user not document owner!");
      } else {
        return true;
      }
    }
  },
  // =========== [ remove ] ===========
  remove: function(userId, doc) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("transactionsRemove not-authorized because not logged in!");
    } else {
      if (Meteor.userId() !== doc.owner) {
        throw new Meteor.Error("transactionsRemove not-authorized because not user not document owner!");
      } else {
        return true;
      }
    }
  },
  fetch: ['owner']
});

// =========== [ transactions deny ] ===========
transactions.deny({
  insert: function(userId) {
    return false;
  },
  update: function(userId, doc) {
    return false;
  },
  remove: function(userId, doc) {
    return false;
  },
  fetch: ['locked']
});
