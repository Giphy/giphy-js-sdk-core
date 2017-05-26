/*
 search.spec.js
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

describe('SEARCH - gifs', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);

  it('PROMISE - returns search results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.search("gifs", {
      "q": "fun"
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);

      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('passed in arguments returns search results (OFFSET) validated', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.search("gifs", {
      "q": "fun",
      "limit": 12,
      "offset": 25
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.equal(12);
      expect(response.pagination.offset).to.equal(25)
      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns search results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.search("gifs", {
      "q": "fun"
    }, function(response, err) {
      if (err) {
        done(err)
      }
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);
      done();
    });
  });

  it('PROMISE - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);
    client.search("gifs", {
      "q": "fun"
    }).then((response) => {

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });
      done();
    }).catch((err) => {
      throw done(err)
    })
  })

  it('CALLBACK - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);
    client.search("gifs", {
      "q": "fun"
    }, function(response, err) {
      if (err) done(err);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });
      done();
    });
  });

});


describe('SEARCH - stickers', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);

  it('PROMISE - returns search results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.search("stickers", {
      "q": "fun"
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);

      done();
    }).catch((err) => {
      done(err);
    })
  });


  it('passed in arguments returns search results (OFFSET) validated', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.search("stickers", {
      "q": "fun",
      "limit": 10,
      "offset": 25
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.equal(10);
      expect(response.pagination.offset).to.equal(25);
      done();
    }).catch((err) => {
      done(err);
    })
  });


  it('CALLBACK - returns search results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.search("stickers", {
      "q": "fun"
    }, function(response, err) {
      if (err) {
        done(err)
      }
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);
      done();
    });
  });

  it('PROMISE - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);
    client.search("stickers", {
      "q": "fun"
    }).then((response) => {

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');

      });
      done();
    }).catch((err) => {
      throw done(err)
    })
  })

  it('CALLBACK - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);
    client.search("stickers", {
      "q": "fun"
    }, function(response, err) {
      if (err) done(err);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');

      });
      done();
    });
  });
});