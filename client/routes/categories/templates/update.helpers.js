// =========== [ categoriesUpdate helpers ] ===========
Template.categoriesUpdate.helpers({
	areaOptions: function () {
		array = []
		result = areas.find()
		result.forEach(function (area) {
			array.push({label: area.title, value: area._id})
		});
		return array;
	}
});
