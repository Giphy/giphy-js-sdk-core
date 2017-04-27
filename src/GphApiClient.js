var _ = require('lodash');
var RequestHandler = require('./helpers/RequestHandler');

var server_url = "https://api.giphy.com";

class GphApiClient {

  constructor(api_key) {
    this.api_key = api_key;
  }

  /**
   * req()
   * @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
   * q - search query term or phrase
   * limit - (optional) number of results to return, maximum 100. Default 25.
   * offset - (optional) results offset, defaults to 0.
   * rating - (optional) limit results to those rated (y,g, pg, pg-13 or r).
   * lang - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code. See list of supported languages here
   * fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
   */
  search(type, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${server_url}/v1/${type}/search`,
      method: 'get',
      params: _.extend({
        api_key: this.api_key
      }, params)
    }

    return RequestHandler(data, cb);
  }

  /**G
   * req()
   * @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
   * limit - (optional) number of results to return, maximum 100. Default 25.
   * offset - (optional) results offset, defaults to 0.
   * rating - (optional) limit results to those rated (y,g, pg, pg-13 or r).
   * fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
   */
  trending(type, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${server_url}/v1/${type}/trending`,
      method: 'get',
      params: _.extend({
        api_key: this.api_key
      }, params)
    }

    return RequestHandler(data, cb);
  }

  /**
   * req()
   * @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
   * s - term or phrase to translate into a GIF
   * lang - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code
   * fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
   */
  translate(type, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${server_url}/v1/${type}/translate`,
      method: 'get',
      params: _.extend({
        api_key: this.api_key
      }, params)
    }

    return RequestHandler(data, cb);
  }

  /**
   * req()
   * @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
   * tag - the GIF tag to limit randomness by
   * rating - limit results to those rated (y,g, pg, pg-13 or r).
   * fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
   */
  random(type, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${server_url}/v1/${type}/random`,
      method: 'get',
      params: _.extend({
        api_key: this.api_key
      }, params)
    }

    return RequestHandler(data, cb);
  }

  /**
   * req()
   * @param args: object that includes 'method', 'url', required 'param' query
   */
  gifById(id, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${server_url}/v1/gifs/${id}`,
      method: 'get',
      params: {
        api_key: this.api_key
      }
    }

    return RequestHandler(data, cb);
  }

  /**
   * req()
   * @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
   * ids - a comma separated list of IDs to fetch GIF size data.
   */
  gifByIds(params, cb) {

    //separate teh array into a string of separated values as superagent needs special formatting for array params
    params.ids = params.ids.join(',');

    const data = {
      //grabs the correct endpoint from an object
      url: `${server_url}/v1/gifs`,
      method: 'get',
      params: _.extend({
        api_key: this.api_key
      }, params)
    }

    return RequestHandler(data, cb);
  }

  /**
   * Returns a list of categories
   * @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
   * @param limit
   * @param offset
   */
  categories(params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${server_url}/v1/gifs/categories`,
      method: 'get',
      params: _.extend({
        api_key: this.api_key
      }, params)
    }

    return RequestHandler(data, cb);
  }

  /**
   * Returns a list of subcategories for a category
   * @param args: object that includes 'method', 'url', required 'p\aram' query, optional 'params' below
   * @param limit
   * @param offset
   */
  subcategories(subcategory, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${server_url}/v1/gifs/categories/${subcategory}`,
      method: 'get',
      params: _.extend({
        api_key: this.api_key
      }, params)
    }

    return RequestHandler(data, cb);
  }

  /**
   * Returns a list of gifs
   * @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
   * @param limit
   * @param offset
   */
  gifsByCategories(category, subcategory, params, cb) {

    const data = {
      //grabs the correct endpoint from an object
      url: `${server_url}/v1/gifs/categories/${category}/${subcategory}`,
      method: 'get',
      params: _.extend({
        api_key: this.api_key
      }, params)
    }

    return RequestHandler(data, cb);
  }


}

module.exports = GphApiClient;