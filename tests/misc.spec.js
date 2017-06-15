/*
 misc.spec.js
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


var expect = require('chai').expect;
var GphApiClient = require('../lib/GphApiClient')
var _ = require('lodash');

describe('EMPTY RESPONSES', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);

  it('Search term with no responses returns empty array', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.search("gifs", {
      "q": "funfunfunfunnofun"
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.equal(0);

      done();
    }).catch((err) => {
      done(err);
    })
  });
});

describe('ERROR RESPONSES', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);

  it('SEARCH Missing type variable throws appropriate error (gif instead of gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.search("gif", {
      "q": "funfunfunfunnofun"
    }).then((response) => {
    }).catch((err) => {
      expect(err).to.be.a('string', "The type argument was passed in incorrectly. It should be either 'gifs' or 'stickers'");
      done()
    })
  });

  it('GifById - pass in a wrong ID', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.gifByID("8SDNJAJS2WRONG").then((response) => {

    }).catch((err) => {
      expect(err).to.have.keys('status', 'error', 'statusText');
      done();
    })
  });
});


describe('INVALID API KEY ATTEMPTS', function() {
  var apiKey = "4OMJYpPoYwVpe888888";
  var client = GphApiClient(apiKey);

  it('INVALID API KEY', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    var apiKeyTemp = "4OMsssssJYpPoYwVpe";
    var clientTemp = GphApiClient(apiKey);

    this.timeout(5000);

    client.gifByID("8SDNJAJS2WRONG").then((response) => {

    }).catch((err) => {
      expect(err).to.have.keys('status', 'error', 'statusText');
      done();
    })
  });
});

describe('Cancel requests properly', function() {

  it('Cancel requests properly', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    var apiKey = "4OMJYpPoYwVpe";
    var client = GphApiClient(apiKey);

    this.timeout(5000);

    var didItGetHere = false
    setTimeout(function() {
      done()
    }, 2000);

    var cancelRequest = client.gifByID("8SDNJAJS2WRONG")
    cancelRequest.cancel();
    cancelRequest.then((response) => {
      throw "did not cancel"
    })
    cancelRequest.catch((err) => {
      throw err
    })

  });
});