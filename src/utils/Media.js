/*
 * Created by Cosmo Cochrane on 4/20/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var Images = require('./Images');
var User = require('./User');

var Media = function(data) {
  return ({
    type: data.type ? data.type : null,
    id: data.id ? data.id : null,
    slug: data.slug ? data.slug : null,
    url: data.url ? data.url : null,
    bitly_gif_url: data.bitly_gif_url ? data.bitly_gif_url : null,
    bitly_url: data.bitly_url ? data.bitly_url : null,
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
    title: data.title ? data.title : null,
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