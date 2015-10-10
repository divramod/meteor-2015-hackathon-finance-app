// =========== [ settings publis ] ===========
Meteor.publish("settings", function () {
    return settings.find();
});
