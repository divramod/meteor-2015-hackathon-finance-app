// =========== [ transactions TabularTables ] ===========
TabularTables = {};

// =========== [ default ] ===========
TabularTables.transactions = new Tabular.Table({
  name: "transactions",
  collection: transactions,
  columns: [{
    title: "Actions",
    tmpl: Meteor.isClient && Template.rowTemplate,
    tmplContext: function(rowData) {
      return {
        item: rowData,
        column: 'title',
        collection: 'transactions'
      }
    }
  }, {
    data: "value",
    title: "Value"
  }, {
    data: "user_id",
    title: "Value"
  }, {
    data: "account_id",
    title: "Value"
  }]
});
