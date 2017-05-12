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
var MediaItemTemplate = require('./MediaItemTemplate');

/*these two function are used to map an api response
to a desired spec response that is located at ./MediaItemTemplate
*/

/*
flattens the entire spec response
places each value into the array as its path
*/
function flat(obj, parentKey) {
  let keys = [];
      _.forOwn(obj, (val, childKey) => {
        const fullKey = (
          parentKey ? (parentKey + "." + childKey): childKey
        )
        if (obj[childKey] && ((typeof obj[childKey]) == "object")){
          keys = keys.concat(flat(obj[childKey], fullKey))
        }
        else {
          keys.push(fullKey)
        }
    });
  return keys
}

/*
inserts the flattened spec doc into a new template, if the values
if the values are not present they will default to null
*/
var mapper = function(template, data) {
  const keys = flat(template);
  keys.forEach((key) => {
    _.set(template, key, _.get(data, key, null))
  })

  return template
}

function responseFormatter(data, endpoint) {
  switch (endpoint) {
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
          fixed_height_downsampled: {
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
    case "translate":      
    case "gifByID":
      console.log(data);

      const template = mapper(MediaItemTemplate, data);
      _.forOwn(template.images, (val1, key1) => {
        _.forOwn(template.images[key1], (val2, key2) => {
          template.images[key1].media_id = template.id;
          template.images[key1].rendition_type = key1;
        });
      });

      template.images.media_id = template.id;
      return template;

    case "search":
    case "trending":
    case "gifsByIDs":
    case "gifsByCategories":
      const modifiedData = _.map(data, (MediaItem) => {
          _.forOwn(MediaItem.images, (item) => {
            if(item.mp4){
              item.mp4_size = item.mp4;
            }
            if(item.size){
              item.gif_size = item.size
            }
            if(item.url){
              item.gif_url = item.url
            }
            if(item.webp){
              item.webp_url = item.webp
            }
          });
          const template = mapper(MediaItemTemplate, MediaItem)
          _.forOwn(template.images, (val1, key1) => {
            _.forOwn(template.images[key1], (val2, key2) => {
              template.images[key1].media_id = template.id;
              template.images[key1].rendition_type = key1;
            });
          });

          template.images.media_id = template.id;
          return template;
      })

      return modifiedData

    case "categoriesForGifs":
    //MAPS MEDIA ITEM FIELD
      data.forEach((MediaItem) => {
          _.forOwn(MediaItem.gif, (item) => {
            if(item.mp4){
              item.mp4_url = item.mp4;
            }
            if(item.size){
              item.gif_size = item.size
            }
            if(item.url){
              item.gif_url = item.url
            }
            if(item.webp){
              item.webp_url = item.webp
            }
          });

        const template = mapper(MediaItemTemplate, MediaItem.gif)
        _.forOwn(template.images, (val1, key1) => {
          _.forOwn(template.images[key1], (val2, key2) => {
            template.images[key1].media_id = template.id;
            template.images[key1].rendition_type = key1;
          });
      });
      template.images.media_id = template.id;
      MediaItem.gif = template;
      });

      //CHANGES CATEGORY FIELDS
       _.forOwn(data, (category) => {
        category.subcategories.forEach((subcategory) => {
          subcategory.gif = null;
          subcategory.subcategories = null;
        });
      });
      return data

    case "subCategoriesForGifs":
      data.forEach((MediaItem) => {
          _.forOwn(MediaItem.images, (item) => {
            if(item.mp4){
              item.mp4_size = item.mp4;
            }
            if(item.size){
              item.gif_size = item.size
            }
            if(item.url){
              item.gif_url = item.url
            }
            if(item.webp){
              item.webp_url = item.webp
            }
          });

        const template = mapper(MediaItemTemplate, MediaItem.gif)
        _.forOwn(template.images, (val1, key1) => {
          _.forOwn(template.images[key1], (val2, key2) => {
            template.images[key1].media_id = template.id;
            template.images[key1].rendition_type = key1;
          });
      });
      template.images.media_id = template.id;
      MediaItem.gif = template;
      });

      _.forOwn(data, (subcategory) => {
        subcategory.subcategories = null
      })
      return data
    case "termSuggestions":
      return data

    default:
      throw "Unimplemented endpoint " + endpoint
  }
}


module.exports = responseFormatter