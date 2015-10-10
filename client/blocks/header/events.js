// =========== [ header events ] ===========
Template.header.events({
  'click .dropdown-menu li a': function(e) {
    var width = $(window).width();
    if (width < 768) {
      var navbar = $('.navbar-toggle');
      if (navbar && typeof(navbar) !== 'undefined') {
        console.log("in");
        navbar.click();
        navbar.click();
      }
    }
  },
  'click ul.nav li a': function(e) {
    var width = $(window).width();
    if (width < 768) {
      if (e.currentTarget.className.indexOf("dropdown-toggle") === -1) {
        var width = $(window).width();
        var navbar = $('.navbar-toggle');
        if (navbar && typeof(navbar) !== 'undefined') {
          navbar.click();
        }
      }

    }
  }
});
