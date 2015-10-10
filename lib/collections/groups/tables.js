// =========== [ groups TabularTables ] ===========
TabularTables = {};

// =========== [ default ] ===========
TabularTables.groups = new Tabular.Table({
  name: "groups",
  collection: groups,
  columns: [{
    title: "Actions",
    tmpl: Meteor.isClient && Template.rowTemplate,
    tmplContext: function(rowData) {
      return {
        item: rowData,
        column: 'title',
        collection: 'groups'
      }
    }
  }, {
    data: "name",
    title: "name"
  }, {
    data: "creator",
    title: "creator"
  }, {
    data: "owner",
    title: "owner"
  }, {
    data: "members",
    title: "members"
  }]
});
