// =========== [ transactionsHome helpers ] ===========
Template.transactionsHome.rendered = function() {
  // Stop the carousels
  console.log('STOP');
  $('.categoriesCarousel').carousel({
    interval: false
  });
  $('.areasCarousel').carousel({
    interval: false
  });
}

Template.transactionsHome.helpers({
  templateGesturesAreas: {
    'panleft div': function(event, templateInstance) {
      console.log('Go Next');
      $('.areasCarousel').carousel('next');
      $('.areasCarousel').carousel({
        interval: false
      });
    },

    'panright div': function(event, TemplateInstance) {
      console.log('Go Back');
      $('.areasCarousel').carousel('prev');
      $('.areasCarousel').carousel({
        interval: false
      });
    }
  },
  templateGestures: {
    'panleft div': function(event, templateInstance) {
      console.log('Go Next');
      $('.categoriesCarousel').carousel('next');
      $('.categoriesCarousel').carousel({
        interval: false
      });
    },

    'panright div': function(event, TemplateInstance) {
      console.log('Go Back');
      $('.categoriesCarousel').carousel('prev');
      $('.categoriesCarousel').carousel({
        interval: false
      });
    }
  },
  categories: [{
    name: "Category 1",
    icon: "cubes"
  }, {
    name: "Category 2",
    icon: "desktop"
  }, {
    name: "Category 3",
    icon: "flag"
  }, {
    name: "Category 4",
    icon: "twitter"
  }, {
    name: "Category 5",
    icon: "car"
  }, {
    name: "Category 6",
    icon: "euro"
  }],
  areas: [{
    name: "Area 1",
    icon: "euro"
  }, {
    name: "Area 2",
    icon: "heart"
  }, {
    name: "Area 3",
    icon: "rocket"
  }],
});
