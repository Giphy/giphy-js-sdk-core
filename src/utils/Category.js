/*
 * Created by Bogdan Tirca on 4/21/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var Media = require('./Media');
var _ = require('lodash');

var Category = function(data) {
  return ({
    name: data.name ? data.name : null,
    name_encoded: data.name_encoded ? data.name_encoded : null,
    gif: data.gif ? Media(data.gif) : null,
    subcategories: data.subcategories ? _.map(data.subcategories, (subcat) => Category(subcat)) : null
  })
}

module.exports = Category