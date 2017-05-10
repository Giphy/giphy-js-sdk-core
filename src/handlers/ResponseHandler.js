var _ = require('lodash');
var responseFormatter = require('../utils/responseFormatter');

//handle status code and resolve/reject promise
function ResponseHandler(err, res, resolve, reject, endpoint) {
  if (err && err.status) {
    if (res.status >= 400 && res.status <= 502) {
      reject(err.status)
    }
  }

  if (res && res.status >= 200 && res.status < 300) {
    if (res.status === 204) return resolve(res); //For successful DELETE requests
    var constructorModifiedData = formatApiReturn(res.body, endpoint);
    //pass through one of the four models
    resolve(constructorModifiedData);

  } else {
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

  return responseObject

}

module.exports = ResponseHandler