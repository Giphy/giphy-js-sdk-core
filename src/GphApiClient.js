var _ = require('lodash');
var RequestHandler = require('./helpers/RequestHandler');
var Endpoint = require('./helpers/Endpoints');

class GphApiClient {

	constructor(api_key){
		this.api_key = api_key;
	}

	search(type, params, cb){
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

		const data = {
			//grabs the correct endpoint from an object
			url: Endpoint("search", type),
			method: 'get',
			params: _.extend({api_key: this.api_key}, params)
		}

		return RequestHandler(data, cb);
	}

	trending(type, params, cb){
		/**G
		* req()
		* @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
		* limit - (optional) number of results to return, maximum 100. Default 25.
		* offset - (optional) results offset, defaults to 0.
		* rating - (optional) limit results to those rated (y,g, pg, pg-13 or r).
		* fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
			*/
		const data = {
			//grabs the correct endpoint from an object
			url: Endpoint("trending", type),
			method: 'get',
			params: _.extend({api_key: this.api_key}, params)
		}

		return RequestHandler(data, cb);
	}

	translate(type, params, cb){
		/**
		* req()
		* @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
		* s - term or phrase to translate into a GIF
		* lang - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code
		* fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
			*/
		const data = {
			//grabs the correct endpoint from an object
			url: Endpoint("translate", type),
			method: 'get',
			params: _.extend({api_key: this.api_key}, params)
		}

		return RequestHandler(data, cb);
	}

	random(type, params, cb){
		/**
		* req()
		* @param args: object that includes 'method', 'url', required 'param' query, optional 'params' below
		* s - term or phrase to translate into a GIF
		* lang - (optional) specify default country for regional content; format is 2-letter ISO 639-1 country code
		* fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)
			*/
		const data = {
			//grabs the correct endpoint from an object
			url: Endpoint("translate", type),
			method: 'get',
			params: _.extend({api_key: this.api_key}, params)
		}

		return RequestHandler(data, cb);
	}

}

module.exports = GphApiClient;
