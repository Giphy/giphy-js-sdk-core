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
            url: data.fixed_height_downsampled_url,
            height: data.fixed_height_downsampled_height,
            width: data.fixed_height_downsampled_width
          },
          fixed_height_small: {
            url: data.fixed_height_small_url,
            height: data.fixed_height_small_height,
            width: data.fixed_height_small_width
          },
          fixed_width_downsampled: {
            url: data.fixed_height_small_url,
            height: data.fixed_height_small_height,
            width: data.fixed_height_small_width
          },
          fixed_height_downsampled: {
            url: data.fixed_height_small_url,
            height: data.fixed_height_small_height,
            width: data.fixed_height_small_width
          },
          fixed_width_small: {
            url: data.fixed_width_small_url,
            height: data.fixed_width_small_height,
            width: data.fixed_width_small_width
          },
          fixed_width_small_still: {
            url: data.fixed_width_small_url,
            height: data.fixed_width_small_height,
            width: data.fixed_width_small_width
          },
          original: {
            frames: data.image_frames,
            url: data.image_original_url,
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