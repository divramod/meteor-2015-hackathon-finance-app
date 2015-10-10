// =========== [ areas publis ] ===========
Meteor.publish("areas", function () {
    return areas.find();
});
