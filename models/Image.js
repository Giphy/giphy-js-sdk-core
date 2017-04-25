var _ = require('lodash');

class Image {

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
		})
	}

}

module.exports = Image
