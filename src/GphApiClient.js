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
   * @param type specify whether it is a gif or a sticker
   * @param params an object containing parameters
   * @param params.q search query term or phrase
   * @param params.limit (optional) number of results to return, maximum 100. Default 25.
   * @param params.offset(optional) results offset, defaults to 0.
   * @param params.rating (optional) limit results to those rated (y,g, pg, pg-13 or r).
   * @param params.lang (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported languages here
   * @param params.fmt (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
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
   * @param params an object containing parameters
   * @param type specify whether it is a gif or a sticker
   * @param params.limit (optional) number of results to return, maximum 100. Default 25.
   * @param params.offset(optional) results offset, defaults to 0.
   * @param params.rating (optional) limit results to those rated (y,g, pg, pg-13 or r).
   * @param params.fmt (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
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
   * @param params.s (optional) the term you would lole to have translated
   * @param params.lang (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code
   * @param params.fmt (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
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
   * @param type specify whether it is a gif or a sticker
   * @param params an object containing parameters
   * @param params.tag (optional) the GIF tag to limit randomness by
   * @param params.rating (optional) limit results to those rated (y,g, pg, pg-13 or r).
   * @param params.fmt (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
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
   * @param id ID associated with a specific gif
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
   * @param params.ids (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
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
   * @param type gif or a sticker
   * @param params an object containing parameters
   * @param params.sort (optional)
   * @param params.offset (optional) results offset, defaults to 0.
   * @param params.limit (optional) number of results to return, maximum 100. Default 25.
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
   * @param subcategory subcategory name
   * @param params an object containing parameters
   * @param params.limit
   * @param params.offset
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
   * @param params an object containing parameters
   * @param category category name
   * @param subcategory subcategory name
   * @param params.limit
   * @param params.offset
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
   * @param term a term to receive back similar terms
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

// module.exports = networkingClient;