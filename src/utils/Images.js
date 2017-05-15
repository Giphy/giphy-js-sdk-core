/*
 Images.js
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

var Image = require('./Image');

var Images = function(data, id) {
  return ({
    media_id: id,
    fixed_height: data.fixed_height ? Image(data.fixed_height, 'fixed_height', id) : null,
    fixed_height_still: data.fixed_height_still ? Image(data.fixed_height_still, 'fixed_height_still', id) : null,
    fixed_height_downsampled: data.fixed_height_downsampled ? Image(data.fixed_height_downsampled, 'fixed_height_downsampled', id) : null,
    fixed_width: data.fixed_width ? Image(data.fixed_width, 'fixed_width', id) : null,
    fixed_width_still: data.fixed_width_still ? Image(data.fixed_width_still, 'fixed_width_still', id) : null,
    fixed_width_downsampled: data.fixed_width_downsampled ? Image(data.fixed_width_downsampled, 'fixed_width_downsampled', id) : null,
    fixed_height_small: data.fixed_height_small ? Image(data.fixed_height_small, 'fixed_height_small', id) : null,
    fixed_height_small_still: data.fixed_height_small_still ? Image(data.fixed_height_small_still, 'fixed_height_small_still', id) : null,
    fixed_width_small: data.fixed_width_small ? Image(data.fixed_width_small, 'fixed_width_small', id) : Image({}, 'fixed_width_small', id),
    fixed_width_small_still: data.fixed_width_small_still ? Image(data.fixed_width_small_still, 'fixed_width_small_still', id) : null,
    downsized: data.downsized ? Image(data.downsized, 'downsized', id) : null,
    downsized_still: data.downsized_still ? Image(data.downsized_still, 'downsized_still', id) : null,
    downsized_large: data.downsized_large ? Image(data.downsized_large, 'downsized_large', id) : null,
    downsized_medium: data.downsized_medium ? Image(data.downsized_medium, 'downsized_medium', id) : null,
    original: data.original ? Image(data.original, 'original', id) : null,
    original_still: data.original_still ? Image(data.original_still, 'original_still', id) : null,
    looping: data.looping ? Image(data.looping, 'looping', id) : null,
    preview: data.preview ? Image(data.preview, 'preview', id) : null,
    downsized_small: data.downsized_small ? Image(data.downsized_small, 'downsized_small', id) : null
  })
}

module.exports = Images