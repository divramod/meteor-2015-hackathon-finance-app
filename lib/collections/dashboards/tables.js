// =========== [ dashboards TabularTables ] ===========
TabularTables = {};

// =========== [ default ] ===========
TabularTables.dashboards = new Tabular.Table({
  name: "dashboards",
  collection: dashboards,
  columns: [{
    title: "Actions",
    tmpl: Meteor.isClient && Template.rowTemplate,
    tmplContext: function(rowData) {
      return {
        item: rowData,
        column: 'title',
        collection: 'dashboards'
      }
    }
  }, {
    data: "title",
    title: "Title"
  }]
});
