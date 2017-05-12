/*
 Image.js
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
    webp_url: data.webp_url ? data.webp_url : null,
    webp_size: data.webp_size ? data.webp_size : null,
  })
}


module.exports = Image