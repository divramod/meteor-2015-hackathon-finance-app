// =========== [ areasUpdate helpers ] ===========
Template.areasUpdate.helpers({
	groupOptions: function () {
		array = []
		result = groups.find()
		result.forEach(function (group) {
			array.push({label: group.title, value: group._id})
		});
		return array;
	}
});
