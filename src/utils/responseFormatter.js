/*
 * Created by Bogdan Tirca on 4/21/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var _ = require('lodash');
var Media = require('./Media');
var Category = require('./Category');
var TermSuggestion = require('./TermSuggestion');

function responseFormatter(data, endpoint) {
  switch (endpoint) {
    case "translate":
    case "gifByID":
      return Media(data);

    case "search":
    case "trending":
    case "gifsByIDs":
    case "gifsByCategories":
      return _.map(data, (gifObject) => {
        return Media(gifObject);
      });

    case "categoriesForGifs":
      return _.map(data, (singleCategory) => {
        return Category(singleCategory)
      })

    case "subCategoriesForGifs":
      return _.map(data, (singleSubCategory) => {
        return Category(singleSubCategory)
      })

    case "termSuggestions":
      return _.map(data, (singleTerm) => {
        return TermSuggestion(singleTerm)
      })
    case ("random"):
      return {
        images: {
          fixed_height_downsampled: {
            gif_url: data.fixed_height_downsampled_url,
            height: data.fixed_height_downsampled_height,
            width: data.fixed_height_downsampled_width
          },
          fixed_height_small: {
            gif_url: data.fixed_height_small_url,
            height: data.fixed_height_small_height,
            width: data.fixed_height_small_width
          },
          fixed_width_downsampled: {
            gif_url: data.fixed_height_small_url,
            height: data.fixed_height_small_height,
            width: data.fixed_height_small_width
          },
          fixed_width_small: {
            gif_url: data.fixed_width_small_url,
            height: data.fixed_width_small_height,
            width: data.fixed_width_small_width
          },
          fixed_width_small_still: {
            gif_url: data.fixed_width_small_url,
            height: data.fixed_width_small_height,
            width: data.fixed_width_small_width
          },
          original: {
            frames: data.image_frames,
            gif_url: data.image_original_url,
            height: data.image_height,
            mp4: data.image_mp4_url,
            width: data.image_width
          },
          id: data.id
        },
        user: {
          username: data.username
        },
        url: data.url,
        type: data.type
      };

    default:
      throw "Unimplemented endpoint " + endpoint
  }
}


module.exports = responseFormatter