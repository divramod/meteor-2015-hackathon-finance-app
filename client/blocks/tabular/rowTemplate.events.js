Template.rowTemplate.events({
  "click .dmEdit": function(event) {
    event.preventDefault();
    var id = this.item._id;
    Router.go("/" + this.collection + "/" + id + "/edit");
  },
  "click .dmDelete": function(event) {
    var id = this.item._id;
    Meteor.call(this.collection + 'Remove', id);
  }
});
Template.transactionActions.events({
  "click .dmEdit": function(event) {
    console.log("in");
    console.log(this);
    event.preventDefault();
    var id = this.item._id;
    Router.go("/" + this.collection + "/" + id + "/edit");
  },
  "click .dmDelete": function(event) {
    var id = this.item._id;
    Meteor.call(this.collection + 'Remove', id);
  }
});
