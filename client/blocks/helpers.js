// =========== [ isActive ] ===========
Template.registerHelper("isActive", function isActive(template) {
  var currentRoute = Router.current();
  //console.log(currentRoute);
  try {
    return currentRoute &&
      template === currentRoute.lookupTemplate() ? 'active' : '';
  } catch (e) {
    /* handle error */
    return false;
  }
});

// =========== [ header helpers ] ===========
Template.registerHelper("getCurrentRouteTitle", function getCurrentRouteTitle() {
  var currentRoute = Router.current();
  try {
    var data = currentRoute.data();
    var title = TAPi18n.__(data.title);
    return title;
  } catch (e) {
    var title = TAPi18n.__(currentRoute.title);
    return title;
  }
});
