'use strict';

module.exports = function (req, res, next) {
	const model = req.params.model;
	if (model) {
		console.log('in the middleware pass');
		next();
	} else {
		next('No model!');
	}
};
