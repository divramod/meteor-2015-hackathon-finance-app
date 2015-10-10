Template.areasInsert.helpers({
	groupOptions: function () {
		array = []
		result = groups.find()
		result.forEach(function (group) {
			array.push({label: group.name, value: group._id})
		});
		return array;
	}
});