var _ = require('lodash');
var Images = require('./Images');
var User = require('./User');
var imagesFormatter = require('./randomEndpointFormatter');



function Media(data, endpoint) {
  /* 
  String url;
  String width;
  String height;
  String size;
  String mp4;
  String mp4_size;
  String webp;
  String webp_size;
  */
  //MANIPULATE FORMAT HERE IF NECESSARY  
  switch(endpoint) {
  case("random"):
    return {
      images: {
        fixed_height_downsampled: {
          url: data.fixed_height_downsampled_url,
          height: data.fixed_height_downsampled_height,
          width: data.fixed_height_downsampled_width
        },
        fixed_height_small: {
          url: data.fixed_height_small_url,
          height: data.fixed_height_small_height,
          width: data.fixed_height_small_width
        },
        fixed_width_downsampled: {
          url: data.fixed_height_small_url,
          height: data.fixed_height_small_height,
          width: data.fixed_height_small_width
        },
        fixed_height_downsampled: {
          url: data.fixed_height_small_url,
          height: data.fixed_height_small_height,
          width: data.fixed_height_small_width
        },
        fixed_width_small: {
          url: data.fixed_width_small_url,
          height: data.fixed_width_small_height,
          width: data.fixed_width_small_width
        },
        fixed_width_small_still: {
          url: data.fixed_width_small_url,
          height: data.fixed_width_small_height,
          width: data.fixed_width_small_width
        },
        original: {
          frames: data.image_frames,
          url: data.image_original_url,
          height: data.image_height,
          mp4: data.image_mp4_url,
          width: data.image_width
        },
        id: data.id;
      },
      user: {
        username: data.username
      },
      url: data.url,
      type: data.type
    };
    case "trending":
    case "translate":
    case "search":
      delete data.username;
      data.images.id = data.id;
      return data

    default:
      throw "Unimplemented endpoint " + endpoint
  }

}

module.exports = Media
