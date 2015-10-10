// =========== [ bookings TabularTables ] ===========
TabularTables = {};

// =========== [ default ] ===========
TabularTables.bookings = new Tabular.Table({
  name: "bookings",
  collection: bookings,
  columns: [{
    title: "Actions",
    tmpl: Meteor.isClient && Template.rowTemplate,
    tmplContext: function(rowData) {
      return {
        item: rowData,
        column: 'title',
        collection: 'bookings'
      }
    }
  }, {
    data: "title",
    title: "Title"
  }]
});
