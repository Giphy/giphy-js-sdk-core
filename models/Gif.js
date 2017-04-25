var _ = require('lodash');
var Images = require('./Images');
var User = require('./User');

class Gif {

	constructor(data) {
		// String url;
		// String width;
		// String height;
		// String size;
		// String mp4;
		// String mp4_size;
		// String webp;
		// String webp_size;

		_.forOwn(data, (val, key) => {
			this[key] = val;

			if(key === "images"){
				this[key] = new Images(data[key])
			} else if (key === "user"){
				this[key] = new User(data[key])
			}
		})
	}

}

module.exports = Gif
