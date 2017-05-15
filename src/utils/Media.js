/*
 Media.js
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

var Images = require('./Images');
var Image = require('./Image');
var User = require('./User');

var Media = function(data) {
  return ({
    type: data.type ? data.type : null,
    id: data.id ? data.id : null,
    slug: data.slug ? data.slug : null,
    url: data.url ? data.url : null,
    bitly_gif_url: data.bitly_url ? data.bitly_url : null,
    embed_url: data.embed_url ? data.embed_url : null,
    source: data.source ? data.source : null,
    rating: data.rating ? data.rating : null,
    content_url: data.content_url ? data.content_url : null,
    tags: data.tags ? data.tags : null,
    featured_tags: data.features_tags ? data.features_tags : null,
    user: data.user ? User(data.user) : null,
    images: data.images ? Images(data.images, data.id) : null,
    source_tld: data.source_tld ? data.source_tld : null,
    source_post_url: data.source_post_url ? new Date(data.source_post_url) : null,
    update_datetime: data.update_datetime ? new Date(data.update_datetime) : null,
    create_datetime: data.create_datetime ? new Date(data.create_datetime) : null,
    import_datetime: data.import_datetime ? new Date(data.import_datetime) : null,
    trending_datetime: data.trending_datetime ? new Date(data.trending_datetime) : null,
    is_hidden: data.is_hidden ? true : false,
    is_removed: data.is_removed ? true : false,
    is_community: data.is_community ? true : false,
    is_anonymous: data.is_anonymous ? true : false,
    is_featured: data.is_featured ? true : false,
    is_realtime: data.is_realtime ? true : false,
    is_indexable: data.is_indexable ? true : false,
    is_sticker: data.is_sticker ? true : false
  })
}

module.exports = Media