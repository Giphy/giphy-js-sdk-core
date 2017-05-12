var _ = require('lodash');
var RequestHandler = require('./handlers/RequestHandler');


var serverUrl = "https://api.giphy.com";

/**
 * Class representing the networking client.
 */
class GphApiClient {

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * Initialize the SDK by passing in the apiKey.
   */
  setCredentials(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * @return a list of gifs that match the inputted search query
   * @param type @type string specify whether it is a gif or a sticker
   * @param params @type object an object containing parameters
   * @param params.q @type string search query term or phrase
   * @param params.limit @property integer (optional) number of results to return, maximum 100. Default 25.
   * @param params.offset(optional) @type integer results offset, defaults to 0.
   * @param params.rating (optional)@type string limit results to those rated (y,g, pg, pg-13 or r).
   * @param params.lang (optional) @type string specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported languages here
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  search(type, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/${type}/search`,
      method: 'get',
      params: _.extend({
        api_key: this.apiKey
      }, params)
    }

    return RequestHandler(data, 'search', cb);
  }

  /**
   * @return a list of currently trending gifs
   * @param params @type object an object containing parameters
   * @param type @type string specify whether it is a gif or a sticker
   * @param params.limit (optional) @type integer number of results to return, maximum 100. Default 25.
   * @param params.offset(optional) @type integer results offset, defaults to 0.
   * @param params.rating (optional) @type string limit results to those rated (y,g, pg, pg-13 or r).
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  trending(type, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/${type}/trending`,
      method: 'get',
      params: _.extend({
        api_key: this.apiKey
      }, params)
    }

    return RequestHandler(data, 'trending', cb);
  }

  /**
   * @return a single gif
   * @param type specify whether it is a gif or a sticker
   * @param params an object containing parameters
   * @param params.s (optional) @type string the term you would lole to have translated
   * @param params.rating (optional) @type string @type string limit results to those rated (y,g, pg, pg-13 or r).   
   * @param params.lang (optional) @type string specify default country for regional content; format is 2-letter ISO 639-1 country code
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  translate(type, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/${type}/translate`,
      method: 'get',
      params: _.extend({
        api_key: this.apiKey
      }, params)
    }

    return RequestHandler(data, 'translate', cb);
  }

  /**
   * @return a random gif
   * @param type @type string specify whether it is a gif or a sticker
   * @param params @type object an object containing parameters
   * @param params.tag (optional) @type string the GIF tag to limit randomness by
   * @param params.rating (optional) @type string limit results to those rated (y,g, pg, pg-13 or r).
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  random(type, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/${type}/random`,
      method: 'get',
      params: _.extend({
        api_key: this.apiKey
      }, params)
    }

    return RequestHandler(data, 'random', cb);
  }

  /**
   * @return single gif based on the provided ID
   * @param id @type string ID associated with a specific gif
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  gifByID(id, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/gifs/${id}`,
      method: 'get',
      params: {
        api_key: this.apiKey
      }
    }

    return RequestHandler(data, 'gifByID', cb);
  }

  /**
   * @return a list of gifs per ID
   * @param params an object containing parameters
   * @param params.ids (optional) @type array return results in html or json format (useful for viewing responses as GIFs to debug/test)
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  gifsByIDs(params, cb) {

    //separate teh array into a string of separated values as superagent needs special formatting for array params
    params.ids = params.ids.join(',');

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/gifs`,
      method: 'get',
      params: _.extend({
        api_key: this.apiKey
      }, params)
    }

    return RequestHandler(data, 'gifsByIDs', cb);
  }

  /**
   * @return a list of categories
   * @param type @type string gif or a sticker
   * @param params @type object an object containing parameters
   * @param params.sort (optional) @type string
   * @param params.offset (optional) @type integer results offset, defaults to 0.
   * @param params.limit (optional) @type limit number of results to return, maximum 100. Default 25.
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  categoriesForGifs(params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/gifs/categories`,
      method: 'get',
      params: _.extend({
        api_key: this.apiKey
      }, params)
    }

    return RequestHandler(data, 'categoriesForGifs', cb);
  }

  /**
   * @return a list of subcategories for a category
   * @param subcategory @type string subcategory name
   * @param params @type object an object containing parameters
   * @param params.limit @type integer
   * @param params.offset @type integer
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  subCategoriesForGifs(subcategory, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/gifs/categories/${subcategory}`,
      method: 'get',
      params: _.extend({
        api_key: this.apiKey
      }, params)
    }

    return RequestHandler(data, 'subCategoriesForGifs', cb);
  }

  /**
   * @return a list of gifs
   * @param params @type object an object containing parameters
   * @param category @type string category name
   * @param subcategory @type string subcategory name
   * @param params.limit @type integer
   * @param params.offset @type offset
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  gifsByCategories(category, subcategory, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/gifs/categories/${category}/${subcategory}`,
      method: 'get',
      params: _.extend({
        api_key: this.apiKey
      }, params)
    }

    return RequestHandler(data, 'gifsByCategories', cb);
  }

  /**
   * @return a list of term suggestions
   * @param term @type string a term to receive back similar terms
   * @param callback (optional) callback will default to a promise if nothing is passed in
   */
  termSuggestions(term, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${serverUrl}/v1/queries/suggest/${term}`,
      method: 'get',
      params: _.extend({
        api_key: this.apiKey
      })
    }

    return RequestHandler(data, 'termSuggestions', cb);
  }
}

module.exports = function(apiKey) {
  return new GphApiClient(apiKey);
}