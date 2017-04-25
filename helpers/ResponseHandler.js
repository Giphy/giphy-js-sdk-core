var _ = require('lodash');
var Gif = require('../models/Gif');

function ResponseHandler (err, res, resolve, reject, url) {

	if (err && err.status) {
		// console.log(err);
		printResults('warn', `network err api ${res.req.method}: `, err);
		if (res.status >= 400 && res.status <= 502) {
			resolve({error: res.body || 'error'});
		} else {
			reject(err.status)
		}
	}

	if (res && res.status >= 200 && res.status < 300) {
		printResults('info', `result handle api call: ${res.req.url}`, res.body);
		if (res.status === 204) return resolve(res); //For successful DELETE requests

		var constructorModifiedData = formatApiReturn(res.body, url);
		//pass through one of the four models
		resolve(constructorModifiedData);

	} else {
		reject({
			status: res && res.status ? res.status : 'unknown api error',
			error: res && res.status ? res.status : 'unknown api error',
			statusText: res && res.body ? res.body : null
		});
	}
}

function printResults(kind, msg, result) {
	if (process.env.NODE_ENV !== 'test') {
		// console[kind](msg, result);
	}
}

function formatApiReturn(body, requestURL){
	var modifiedData;
	//certain responses will be objects and others will be arrays
	if(typeof body.data == "object"){
		modifiedData = new Gif(body.data);
	} else {
		modifiedData = _.map(body.data, (item) => {
			return new Gif(item);
		});
	}
	var formattedData = JSON.stringify(modifiedData, null, 2);

	return formattedData

}

module.exports = ResponseHandler
