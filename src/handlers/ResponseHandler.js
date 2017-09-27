/*
 * Created by Bogdan Tirca on 4/21/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var responseFormatter = require('../utils/responseFormatter');

//handle status code and resolve/reject promise
function ResponseHandler(res, data, resolve, reject, endpoint) {
  //handle error status code
  if (res.status >= 400 && res.status <= 502) {
    reject({
      status: res && res.status ? res.status : "unknown api error",
      error: res && data && data.meta && data.meta.msg ? data.meta.msg : null,
      statusText: res && res.statusText ? res.statusText : null
    })
  }
  //deal with successful status code
  if (res && res.status >= 200 && res.status < 300) {
    //pass the api response into a formatter to ensure it is to spec
    var constructorModifiedData = formatApiReturn(data, endpoint);
    resolve(constructorModifiedData);
  } else {
    //reject promise with unexpected error
    reject({
      status: res && res.status ? res.status : 'unknown api error',
      error: res && res.status ? res.status : 'unknown api error',
      statusText: res && res.statusText ? res.statusText : null
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