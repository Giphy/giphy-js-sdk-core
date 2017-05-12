/*
 MediaItemTemplate.js
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


const template = {
  "rating": null, 
  "is_featured": null, 
  "featured_tags": null,
  "tags": null,
  "is_sticker": null,
  "update_datetime": null,
  "create_datetime": null,
  "source_post_url": null, 
  "images": {
    "fixed_width": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "mp4": null, 
      "height": null, 
      "width": null,
      "mp4_url": null,   
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "fixed_height_downsampled": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null, 
      "webp_url": null,
     "mp4_url": null,   
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "media_id": null, 
    "downsized_still": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null,
      "mp4_url": null, 
       "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "fixed_height_small_still": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null, 
      "mp4_url": null,  
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "fixed_width_downsampled": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null, 
      "mp4_url": null,  
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "downsized_large": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null,
      "mp4_url": null,  
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "fixed_width_still": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null, 
      "mp4_url": null, 
      "webp_url": null,  
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "original_still": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null, 
      "mp4_url": null,  
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "fixed_height_still": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null, 
      "mp4_url": null,
      "webp_url": null,   
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "fixed_width_small": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "mp4_url": null, 
      "height": null, 
      "width": null, 
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "fixed_width_small_still": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null, 
      "mp4_url": null, 
      "webp_url": null,  
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "looping": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null, 
      "mp4_url": null, 
       "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "downsized_small": {
      "media_id": null, 
      "rendition_type": null,
      "gif_url": null,  
      "height": null, 
      "width": null, 
      "mp4_url": null, 
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "downsized": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null,
      "mp4_url": null, 
      "webp_url": null,  
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "downsized_medium": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "height": null, 
      "width": null,
      "mp4_url": null, 
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "preview": {
      "media_id": null, 
      "rendition_type": null,
      "gif_url": null,  
      "height": null, 
      "width": null, 
      "mp4_url": null, 
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "fixed_height": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "mp4_url": null, 
      "height": null, 
      "width": null, 
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "original": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "mp4_url": null, 
      "height": null, 
      "width": null, 
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }, 
    "fixed_height_small": {
      "media_id": null, 
      "rendition_type": null, 
      "gif_url": null, 
      "mp4_url": null, 
      "height": null, 
      "width": null, 
      "webp_url": null, 
      "webp_size": null, 
      "mp4_size": null, 
      "frames": null, 
      "gif_size": null
    }
  }, 
  "is_hidden": null, 
  "id": null, 
  "bitly_url": null, 
  "source": null, 
  "type": null, 
  "embed_url": null, 
  "source_tld": null, 
  "trending_datetime": null, 
  "content_url": null, 
  "is_indexable": null, 
  "is_removed": null, 
  "user": {
    "username": null, 
    "display_name": null, 
    "attribution_display_name": null,
    "name": null,
    "description": null,
    "banner_url": null, 
    "twitter": null,
    "facebook_url": null,
    "twitter_url": null, 
    "instagram_url": null,
    "tumblr_url": null,
    "avatar_url": null, 
    "is_public": null, 
    "website_url": null,
    "website_display_url": null,
    "suppress_chrome": null, 
    "profile_url": null
  }, 
  "bitly_gif_url": null, 
  "slug": null, 
  "is_anonymous": null, 
  "is_community": null, 
  "url": null, 
  "is_sticker": null, 
  "import_datetime": null, 
  "is_realtime": null
}


module.exports = template



