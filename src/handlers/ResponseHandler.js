/*
 ResponseHandler.js
 GiphyCoreSDK

 Created by Cosmo Cochrane on 4/24/17.
 Copyright © 2017 Giphy. All rights reserved.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/



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
  responseObject.data = responseFormatter(body.data, endpoint);
  responseObject.meta = body.meta;
  if (body.pagination) {
    responseObject.pagination = body.pagination;
    if (!responseObject.pagination.offset) {
      responseObject.pagination.offset = null
    }
  }
  return responseObject

}

module.exports = ResponseHandler