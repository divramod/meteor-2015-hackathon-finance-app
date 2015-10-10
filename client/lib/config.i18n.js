Meteor.startup(function() {
  getUserLanguage = function() {
    // Put here the logic for determining the user language
    return "de";
  };
  Session.set("showLoadingIndicator", true);

  TAPi18n.setLanguage(getUserLanguage())
    .done(function() {
      console.log("done");
      Session.set("showLoadingIndicator", false);
    })
    .fail(function(error_message) {
      console.log(error_message);
    });
});
