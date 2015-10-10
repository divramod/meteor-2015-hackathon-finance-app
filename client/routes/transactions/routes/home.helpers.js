// =========== [ transactionsHome helpers ] ===========
Template.transactionsHome.helpers({
  templateGestures: {
    'panleft div': function(event, templateInstance) {
        console.log(event.type + ' dected');

      /* `event` is the Hammer.js event object */
      /* `templateInstance` is the `Blaze.TemplateInstance` */
      /* `this` is the data context of the element in your template, so in this case `someField` from `someArray` in the template */
    },

    'panright div': function(event, TemplateInstance) {
        console.log(event.type + ' dected');
    }
  },
  categories: [
    {name: "Category 1"},
    {name: "Category 2"},
    {name: "Category 3"}
  ]
});
