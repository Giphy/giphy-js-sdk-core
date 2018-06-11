/*
 * Created by Cosmo Cochrane on 4/20/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var expect = require('chai').expect
var GphApiClient = require('../lib/GphApiClient')
var _ = require('lodash')

describe('SUBCATEGORIES', function() {
    var apiKey = '4OMJYpPoYwVpe'
    var client = GphApiClient(apiKey)

    it('PROMISE - returns an array of categories', function(done) {
        this.timeout(5000)
        client
            .subCategoriesForGifs('tv', {})
            .then(response => {
                expect(Array.isArray(response.data)).to.equal(true)
                response.data.forEach(function(category) {
                    expect(category).to.have.keys('name_encoded', 'subcategories', 'name', 'gif')
                })
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    it('CALLBACK - returns an array of categories', function(done) {
        this.timeout(5000)
        client.subCategoriesForGifs('tv', {}, function(response, err) {
            if (err) done(err)
            expect(Array.isArray(response.data)).to.equal(true)
            response.data.forEach(function(category) {
                expect(category).to.have.keys('name_encoded', 'subcategories', 'name', 'gif')
            })
            done()
        })
    })

    it('passing limit and offset to categories endpoint returns with pagination', function(done) {
        this.timeout(5000)
        client
            .subCategoriesForGifs('tv', {
                offset: 1,
                limit: 10
            })
            .then(response => {
                expect(response.data.length).to.equal(10)

                done()
            })
            .catch(err => {
                done(err)
            })
    })

    it('PROMISE correctly responds with an error', function(done) {
        this.timeout(5000)
        client
            .subCategoriesForGifs({
                offset: 1,
                limit: 10
            })
            .then(response => {
                throw 'did not catch the error'
            })
            .catch(err => {
                done()
            })
    })
})
