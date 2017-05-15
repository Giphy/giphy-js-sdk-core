/*
 RequestHandler.js
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

var ResponseHandler = require('./ResponseHandler');
require('es6-promise').polyfill();
require('isomorphic-fetch');

function RequestHandler(vals, endpoint, cb) {

  function req(args, cb) {
    var canceled = false;
    var query_params_string = "?";
    
    Object.keys(args.params).forEach((key) => {
      query_params_string = query_params_string.concat(key + "=" + args.params[key] + "&");
    });

    var constructedRequest = new Promise((resolve, reject) => {
      fetch(args.url + query_params_string, {
          method: args.method,
          headers: {
            "Content-Type": "application/json"
          },
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
          throw err
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