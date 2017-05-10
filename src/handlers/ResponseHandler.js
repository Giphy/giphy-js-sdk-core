var _ = require('lodash');
var Media = require('../utils/Media');
var Category = require('../utils/Category');
var TermSuggestion = require('../utils/TermSuggestion');

function ResponseHandler(err, res, resolve, reject, url) {
  if (err && err.status) {
    printResults('warn', `network err api ${res.req.method}: `, err);
    if (res.status >= 400 && res.status <= 502) {
      reject(err.status)
    }
  }

  if (res && res.status >= 200 && res.status < 300) {
    printResults('info', `result handle api call: ${res.req.url}`, res.body);
    if (res.status === 204) return resolve(res); //For successful DELETE requests
    var constructorModifiedData = formatApiReturn(res.body, url);
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

function printResults(kind, msg, result) {
  if (process.env.NODE_ENV !== 'test') {
    // console[kind](msg, result);
  }
}

function formatApiReturn(body, requestURL) {
  var modifiedData;
  //certain responses will be objects and others will be arrays
  //if we are returning categories 
  if (requestURL.includes('categories')) {
    modifiedData = _.map(body.data, (item) => {
      return Category(item);
    });
  } else if (requestURL.includes('suggest')){
    modifiedData = _.map(body.data, (item) => {
      return TermSuggestion(item);
    });
  } else if (requestURL.includes('random')){
      modifiedData = Media(body.data, 'random');

  } else if (Array.isArray(body.data)) {
    modifiedData = _.map(body.data, (item) => {
      return Media(item);
    });
  } else {
    //single object
    modifiedData = Media(body.data);
  }
  var responseObject = {};
  responseObject.data = modifiedData;
  responseObject.meta = body.meta;

  return responseObject

}

module.exports = ResponseHandler