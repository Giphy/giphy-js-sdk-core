/*
 * Created by Cosmo Cochrane on 4/20/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var Image = require('./Image');

var Images = function(data, id) {
  return ({
    media_id: id,
    fixed_height: data.fixed_height ? Image(data.fixed_height, id, 'fixed_height') : null,
    fixed_height_still: data.fixed_height_still ? Image(data.fixed_height_still, id, 'fixed_height_still') : null,
    fixed_height_downsampled: data.fixed_height_downsampled ? Image(data.fixed_height_downsampled, id, 'fixed_height_downsampled') : null,
    fixed_width: data.fixed_width ? Image(data.fixed_width, id, 'fixed_width') : null,
    fixed_width_still: data.fixed_width_still ? Image(data.fixed_width_still, id, 'fixed_width_still') : null,
    fixed_width_downsampled: data.fixed_width_downsampled ? Image(data.fixed_width_downsampled, id, 'fixed_width_downsampled') : null,
    fixed_height_small: data.fixed_height_small ? Image(data.fixed_height_small, id, 'fixed_height_small') : null,
    fixed_height_small_still: data.fixed_height_small_still ? Image(data.fixed_height_small_still, id, 'fixed_height_small_still') : null,
    fixed_width_small: data.fixed_width_small ? Image(data.fixed_width_small, id, 'fixed_width_small') : Image({} ,id, 'fixed_width_small'),
    fixed_width_small_still: data.fixed_width_small_still ? Image(data.fixed_width_small_still, id, 'fixed_width_small_still') : null,
    downsized: data.downsized ? Image(data.downsized, id, 'downsized') : null,
    downsized_still: data.downsized_still ? Image(data.downsized_still, id, 'downsized_still') : null,
    downsized_large: data.downsized_large ? Image(data.downsized_large, id, 'downsized_large') : null,
    downsized_medium: data.downsized_medium ? Image(data.downsized_medium, id, 'downsized_medium') : null,
    original: data.original ? Image(data.original, id, 'original') : null,
    original_still: data.original_still ? Image(data.original_still, id, 'original_still') : null,
    looping: data.looping ? Image(data.looping, id, 'looping') : null,
    preview: data.preview ? Image(data.preview, id, 'preview') : null,
    downsized_small: data.downsized_small ? Image(data.downsized_small, id, 'downsized_small') : null
  })
}

module.exports = Images