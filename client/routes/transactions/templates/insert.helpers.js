// =========== [ transactionsInsert helpers ] ===========
Template.transactionsInsert.helpers({
	accountOptions: function () {
		array = []
		result = accounts.find()
		result.forEach(function (area) {
			array.push({label: area.title, value: area._id})
		});
		return array;
	}

});
