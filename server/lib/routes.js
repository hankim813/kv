
/**
 * Module dependencies.
 */

var render = require('./render');

/**
 * Home
 * 
 * Serve angular index.html
 * endpoint: '/'
 * @public
 */

exports.home = function *() {
	this.status = 200;
	return this.body = yield render('index');
}