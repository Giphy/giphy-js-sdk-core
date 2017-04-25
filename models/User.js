var _ = require('lodash');

class User {

	constructor(data) {
    	// String avatar_url;
    	// String banner_url;
    	// String profile_url;
    	// String username;
    	// String display_name;

		_.forOwn(data, (val, key) => {
			this[key] = val;
		})
	}

}

module.exports = User
