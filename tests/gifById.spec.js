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

describe('GIF BY ID', function() {
  var apiKey = "4OMJYpPoYwVpe";
  var client = GphApiClient(apiKey);

  it('PROMISE - returns a single gif given an ID', function(done) {
    this.timeout(5000);
    client.gifByID("3og0IvOsj15uYsxYZi").then((response) => {
      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');

      done()
    }).catch((err) => {
      done(err)
    })
  });

  it('CALLBACK - returns a single gif given an ID', function(done) {
    this.timeout(5000);
    client.gifByID("3og0IvOsj15uYsxYZi", function(response, err) {
      if (err) done(err);

      expect(Array.isArray(response.data)).to.equal(false);
      expect(response.data.type).to.equal('gif');
      done()
    })
  });


  it('PROMISE - errors out when an invalid gif ID was passed in', function(done) {
    this.timeout(5000);
    client.gifByID("3og0IvOsj15uYadsjandkjanssxYZi").then((response) => {
     
      throw 'should have never made it to the success block'
    }).catch((err) => {
      done()
    })
  });

  it('CALLBACK - errors out when an invalid gif ID was passed in', function(done) {
    this.timeout(5000);
    client.gifByID("3og0IvOsj15uadasdasdasdYsxYZi", function(response, err) {
      if (err) done();
      throw 'should have never made it to the success block'
    })
  });

});






