/*
 * Created by Bogdan Tirca on 4/21/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var expect = require('chai').expect;
var GphApiClient = require('../lib/GphApiClient')
var _ = require('lodash');

describe('TRENDING - gifs', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);



  it('PROMISE - trending results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.trending("gifs", {}).then((response) => {
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

    client.trending("gifs", {
      "limit": 10,
      "offset": 25
    }).then((response) => {
      expect(response.data.length).to.equal(10);
      expect(response.pagination.offset).to.equal(25);
      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns trending results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.trending("gifs", {}, function(response, err) {
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
    client.trending("gifs", {}).then((response) => {

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
    client.trending("gifs", {}, function(response, err) {
      if (err) done(err);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });
      done();
    });
  });

});

describe('TRENDING - stickers', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);


  it('PROMISE - trending results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.trending("stickers", {}).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);

      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns trending results', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.trending("stickers", {}, function(response, err) {
      if (err) {
        done(err)
      }
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.be.above(0);
      done();
    });
  });

  it('passed in arguments returns search results (OFFSET) validated', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);

    client.trending("stickers", {
      "limit": 10,
      "offset": 25
    }).then((response) => {
      expect(response.data.length).to.equal(10);
      expect(response.pagination.offset).to.equal(25);
      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('PROMISE - returns an array of objects (gifs)', function(done) {
    // Increase the default timeout for this test
    // If the test takes longer than this, it will fail
    this.timeout(5000);
    client.trending("stickers", {}).then((response) => {

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
    client.trending("stickers", {}, function(response, err) {
      if (err) done(err);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });
      done();
    });
  });

});