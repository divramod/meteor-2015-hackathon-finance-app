// =========== [ transactions publis ] ===========
Meteor.publish("transactions", function () {
    return transactions.find();
});
