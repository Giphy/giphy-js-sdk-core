/*
 * Created by Cosmo Cochrane on 4/20/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var Image = function(data, id, rendition_type) {
  return ({
    media_id: id ? id : null,
    rendition_type: rendition_type ? rendition_type : null,
    gif_url: data.url ? data.url : null,
    width: data.width ? data.width : null,
    height: data.height ? data.height : null,
    gif_size: data.size ? data.size : null,
    frames: data.frames ? data.frames : null,
    mp4_url: data.mp4 ? data.mp4 : null,
    mp4_size: data.mp4_size ? data.mp4_size : null,
    webp_url: data.webp ? data.webp : null,
    webp_size: data.webp_size ? data.webp_size : null
  })
}


module.exports = Image