var _ = require('lodash');
var responseFormatter = require('../utils/responseFormatter');

//handle status code and resolve/reject promise
function ResponseHandler(err, res, resolve, reject, endpoint) {
  //handle error status code
  if (err && err.status) {
      console.warn(`network err api ${res.req.method}: ${err}`);

    if (res.status >= 400 && res.status <= 502) {
      reject({
        status: res && res.status ? res.status : "unknown api error",
        error: res && res.body && res.body.meta && res.body.meta.msg ? res.body.meta.msg : null,
        statusText: res && res.body ? res.body : null
      })
    }
  }
  //deal with successful status code
  if (res && res.status >= 200 && res.status < 300) {
    //pass the api response into a formatter to ensure it is to spec
    var constructorModifiedData = formatApiReturn(res.body, endpoint);
    resolve(constructorModifiedData);
  } else {
    //reject promise with unexpected error
    reject({
      status: res && res.status ? res.status : 'unknown api error',
      error: res && res.status ? res.status : 'unknown api error',
      statusText: res && res.body ? res.body : null
    });
  }
}

//creates the response object
function formatApiReturn(body, endpoint) {
  var responseObject = {};
  //modify the data field to match spec
  var modifiedData = responseFormatter(body.data, endpoint)
  responseObject.data = modifiedData;
  responseObject.meta = body.meta;
  if(body.pagination){
    responseObject.pagination = body.pagination;
  }
  return responseObject

}

module.exports = ResponseHandler