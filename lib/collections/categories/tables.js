// =========== [ categories TabularTables ] ===========
TabularTables = {};

// =========== [ default ] ===========
TabularTables.categories = new Tabular.Table({
  name: "categories",
  collection: categories,
  columns: [{
    title: "Actions",
    tmpl: Meteor.isClient && Template.rowTemplate,
    tmplContext: function(rowData) {
      return {
        item: rowData,
        column: 'title',
        collection: 'categories'
      }
    }
  }, {
    data: "title",
    title: "Title"
  }]
});
