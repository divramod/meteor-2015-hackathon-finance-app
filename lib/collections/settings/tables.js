// =========== [ settings TabularTables ] ===========
TabularTables = {};

// =========== [ default ] ===========
TabularTables.settings = new Tabular.Table({
  name: "settings",
  collection: settings,
  columns: [{
    title: "Actions",
    tmpl: Meteor.isClient && Template.rowTemplate,
    tmplContext: function(rowData) {
      return {
        item: rowData,
        column: 'title',
        collection: 'settings'
      }
    }
  }, {
    data: "title",
    title: "Title"
  }]
});
