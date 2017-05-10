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
  data.username
  
  if(endpoint === 'random'){
    modifiedData = {};
    modifiedData["images"] = Images(imagesFormatter(data), data.id, true);
    modifiedData.user = {username: data.username};
    modifiedData.url = data.url;
    modifiedData.type = data.type;
    return modifiedData;
  } else {
    delete data.username;
    if (data["images"]) {
      data["images"] = Images(data["images"], data.id)
    } else if (data["user"]) {
      data["user"] = User(data["user"])
    }
    return data
  }

}

module.exports = Media