/*
 User.js
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