// =========== [ reports TabularTables ] ===========
TabularTables = {};

// =========== [ default ] ===========
TabularTables.reports = new Tabular.Table({
  name: "reports",
  collection: reports,
  columns: [{
    title: "Actions",
    tmpl: Meteor.isClient && Template.rowTemplate,
    tmplContext: function(rowData) {
      return {
        item: rowData,
        column: 'title',
        collection: 'reports'
      }
    }
  }, {
    data: "title",
    title: "Title"
  }]
});
