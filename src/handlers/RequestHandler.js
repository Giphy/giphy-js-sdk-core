/*
 * Created by Cosmo Cochrane on 4/20/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var ResponseHandler = require('./ResponseHandler');
require('es6-promise').polyfill();
if(typeof fetch === 'undefined') {
  require('isomorphic-fetch');
}

function RequestHandler(vals, endpoint, cb) {

  function req(args, cb) {
    var canceled = false;
    var query_params_string = "?";

    Object.keys(args.params).forEach((key) => {
      query_params_string = query_params_string.concat(key + "=" + args.params[key] + "&");
    });

    var constructedRequest = new Promise((resolve, reject) => {
      if (vals.type && vals.type !== 'gifs' && vals.type !== 'stickers') {
        reject("The type argument was passed in incorrectly. It should be either 'gifs' or 'stickers'")
      }

      fetch(args.url + query_params_string, {
        method: args.method
      }).then((response) => { //calling the end function will send the actual request 
        if (canceled === true) {
          return
        } else {
          response.json().then((data) => {
            ResponseHandler(response, data,
              (res) => {
                resolve(res);
                if (cb !== undefined) {
                  cb(res, null);
                }
              },
              (err) => {
                reject(err);
                if (cb !== undefined) {
                  cb(null, err);
                }
              }, endpoint) //pass in args.url so you can determine before resolving the promise what request was just made
            // we pass the response to our helper method imported from ./helpers/
          })
        }
      }).catch((err) => {
        reject(err)
      })
    })
    //allows users to cancel outgoing requests
    constructedRequest.cancel = function() {
      canceled = true;
    }

    return constructedRequest
  }

  return req(vals, cb);
  //return the promise
}

module.exports = RequestHandler
