// =========== [ accounts TabularTables ] ===========
TabularTables = {};

// =========== [ default ] ===========
TabularTables.accounts = new Tabular.Table({
  name: "accounts",
  collection: accounts,
  columns: [{
    title: "Actions",
    tmpl: Meteor.isClient && Template.rowTemplate,
    tmplContext: function(rowData) {
      return {
        item: rowData,
        column: 'title',
        collection: 'accounts'
      }
    }
  }, {
    data: "name",
    title: "name"
  }, {
    data: "type",
    title: "type"
  }]
});
