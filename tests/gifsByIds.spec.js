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

describe('GIFS BY IDS', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);


  it('PROMISE - returns gifs based on the ids sent', function(done) {
    this.timeout(5000);
    client.gifsByIDs({
      "ids": ["3og0IvOsj15uYsxYZi", "l41lS0IgRIFkAuA5G", "3o6oziEt5VUgsuunxS"]
    }).then((response) => {
      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.equal(3);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });

      done();
    }).catch((err) => {
      done(err);
    })
  });

  it('CALLBACK - returns gifs based on the ids sent', function(done) {
    this.timeout(5000);
    client.gifsByIDs({
      "ids": ["3og0IvOsj15uYsxYZi", "l41lS0IgRIFkAuA5G", "3o6oziEt5VUgsuunxS"]
    }, function(response, err) {
      if (err) done(err);

      expect(Array.isArray(response.data)).to.equal(true);
      expect(response.data.length).to.equal(3);

      response.data.forEach(function(gif) {
        expect(gif.type).to.equal('gif');
      });

      done();
    });
  });
});