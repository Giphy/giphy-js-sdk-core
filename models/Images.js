var _ = require('lodash');
var Image = require('./Image');

	class Images {
		// Image fixed_height;
		// Image fixed_height_still;
		// Image fixed_height_downsampled;
		// Image fixed_width;
		// Image fixed_width_still;
		// Image fixed_width_downsampled;
		// Image fixed_height_small;
		// Image fixed_height_small_still;
		// Image fixed_width_small;
		// Image fixed_width_small_still;
		// Image downsized;
		// Image downsized_still;
		// Image downsized_large;
		// Image downsized_medium;
		// Image original;
		// Image original_still;
		// Image looping;
		// Image original_mp4;
		// Image preview;
		// Image downsized_small;
		// Image preview_gif;
		// Image preview_webp;

		constructor(data){
			_.forOwn(data, (val, key) => {
				this[key] = new Image(val);

			})
		}




	}

module.exports = Images
