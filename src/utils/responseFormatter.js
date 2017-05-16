/*
 responseFormatter.js
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