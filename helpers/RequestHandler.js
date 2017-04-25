var request = require('superagent');
var ResponseHandler = require('./ResponseHandler');

function RequestHandler(vals, cb) {
		function req (args, cb) {
			return new Promise((resolve, reject) => {
				return request[args.method](args.url) //request.get('/some-url')
					.set('Content-Type', 'application/json')
					.query({api_key: args.api_key})
					.query(args.params)
					.end(function (err, res) { //calling the end function will send the actual request
						ResponseHandler(err, res, (res) => {
							resolve(res);
							if (cb !== undefined) {
								cb(res.body, null);
							}
						}, (err) => {
							reject(err);
							if (cb !== undefined) {
								cb(null, err);
							}
						}, args.url) //pass in args.url so you can determine before resolving the promise what request was just made
						 // we pass the response to our helper method imported from ./helpers/
					});
			})
		}

		return req(vals, cb);
		 //return the promise
	}

module.exports = RequestHandler
