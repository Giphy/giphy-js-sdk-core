var MediaItem = require('./MediaItem');
var _ = require('lodash');

var Category = function(data){
	return (
		{
			name: data.name ? data.name : null,
			name_encoded: data.name_encoded ? data.name_encoded : null,
			gif: data.gif ? MediaItem(data.gif) : MediaItem({}),
			subcategories: data.subcategories ? _.map(data.subcategories, (subcat) => Category(subcat)) : []
		}
	)
}

module.exports = Category

