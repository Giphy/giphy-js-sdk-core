var imagesFormatter = function(data){

  var images = {};
  images.fixed_height_downsampled = {
    url: data.fixed_height_downsampled_url,
    height: data.fixed_height_downsampled_height,
    width: data.fixed_height_downsampled_width
  }
  images.fixed_height_small = {
    url: data.fixed_height_small_url,
    height: data.fixed_height_small_height,
    width: data.fixed_height_small_width
  }
  images.fixed_width_downsampled = {
    url: data.fixed_height_small_url,
    height: data.fixed_height_small_height,
    width: data.fixed_height_small_width
  }
  images.fixed_height_downsampled = {
    url: data.fixed_height_small_url,
    height: data.fixed_height_small_height,
    width: data.fixed_height_small_width
  }
  images.fixed_width_small = {
    url: data.fixed_width_small_url,
    height: data.fixed_width_small_height,
    width: data.fixed_width_small_width
  }
  images.fixed_width_small_still = {
    url: data.fixed_width_small_url,
    height: data.fixed_width_small_height,
    width: data.fixed_width_small_width
  }
  images.original = {
    frames: data.image_frames,
    url: data.image_original_url,
    height: data.image_height,
    mp4: data.image_mp4_url,
    width: data.image_width
  }

  return images 
}

module.exports = imagesFormatter;