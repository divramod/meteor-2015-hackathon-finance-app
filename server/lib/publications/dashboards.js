// =========== [ dashboards publis ] ===========
Meteor.publish("dashboards", function () {
    return dashboards.find();
});
