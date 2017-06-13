/*
 categories.spec.js
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

describe('CATEGORIES', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);

  it('PROMISE - returns an array of categories', function(done) {
    this.timeout(5000);
    client.categoriesForGifs({}).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      response.data.forEach(function(category) {
        expect(category).to.have.keys('name', 'name_encoded', 'subcategories', 'gif')
      });
      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returnss an array of categories', function(done) {
    this.timeout(5000);
    client.categoriesForGifs({}, function(response, err) {
      if (err) done(err);
      expect(Array.isArray(response.data)).to.equal(true);
      response.data.forEach(function(category) {
        expect(category).to.have.keys('name', 'name_encoded', 'subcategories', 'gif')
      });
      done();
    });
  });
});