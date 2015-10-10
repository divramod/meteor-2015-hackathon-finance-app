// =========== [ categories publis ] ===========
Meteor.publish("categories", function () {
    return categories.find();
});
