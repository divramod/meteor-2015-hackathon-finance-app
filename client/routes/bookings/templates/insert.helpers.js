// =========== [ bookingsInsert helpers ] ===========
Template.bookingsInsert.helpers({

		catOptions: function () {
		array = []
		result = categories.find()
		result.forEach(function (area) {
			array.push({label: area.name, value: area._id})
		});
		return array;
	},

		areaOptions: function () {
		array = []
		result = areas.find()
		result.forEach(function (area) {
			array.push({label: area.name, value: area._id})
		});
		return array;
	}

});
