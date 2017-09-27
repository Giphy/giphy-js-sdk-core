/*
 * Created by Bogdan Tirca on 4/21/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var User = function(data) {
  return ({
    id: data.id ? data.is_sticker : null,
    avatar_url: data.avatar_url ? data.avatar_url : null,
    banner_url: data.banner_url ? data.banner_url : null,
    profile_url: data.profile_url ? data.profile_url : null,
    username: data.username ? data.username : null,
    display_name: data.display_name ? data.display_name : null,
    twitter: data.twitter ? data.twitter : null,
    is_public: data.is_public ? data.is_public : null,
    attribution_display_name: data.attribution_display_name ? data.attribution_display_name : null,
    name: data.name ? data.name : null,
    description: data.description ? data.description : null,
    facebook_url: data.facebook_url ? data.facebook_url : null,
    twitter_url: data.twitter_url ? data.twitter_url : null,
    instagram_url: data.instagram_url ? data.instagram_url : null,
    tumblr_url: data.tumblr_url ? data.tumblr_url : null,
    suppress_chrome: data.suppress_chrome ? data.suppress_chrome : null,
    website_url: data.website_url ? data.website_url : null,
    website_display_url: data.website_display_url ? data.website_display_url : null
  })
}

module.exports = User