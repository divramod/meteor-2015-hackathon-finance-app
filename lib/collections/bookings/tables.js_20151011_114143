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
    data: "factor",
    title: "factor"
  }, {
    data: "cat_id",
    title: "cat_id"
  }, {
    data: "area_id",
    title: "area_id"
  }, {
    data: "tx_id",
    title: "tx_id"
  }]
});
