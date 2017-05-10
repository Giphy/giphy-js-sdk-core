var _ = require('lodash');

function Image(data, key, id) {
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
  
  data.media_id = id;
  data.rendition_type = key;
  return data
}

module.exports = Image