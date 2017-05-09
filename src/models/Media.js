var _ = require('lodash');
var Images = require('./Images');
var User = require('./User');

function Media(data) {
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

  if (data["images"]) {
    data["images"] = Images(data["images"], data.id)
  } else if (data["user"]) {
    data["user"] = User(data["user"])
  }

  return data
}

module.exports = Media