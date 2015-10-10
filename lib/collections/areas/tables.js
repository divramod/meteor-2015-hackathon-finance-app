// =========== [ areas TabularTables ] ===========
TabularTables = {};

// =========== [ default ] ===========
TabularTables.areas = new Tabular.Table({
  name: "areas",
  collection: areas,
  columns: [{
    title: "Actions",
    tmpl: Meteor.isClient && Template.rowTemplate,
    tmplContext: function(rowData) {
      return {
        item: rowData,
        column: 'title',
        collection: 'areas'
      }
    }
  }, {
    data: "title",
    title: "Title"
  }]
});
