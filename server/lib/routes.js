
/**
 * Module dependencies.
 */

var render = require('./render');

/**
 * Home
 *
 * endpoint: '/'
 * @public
 */

exports.home = function *() {
	this.status = 200;
	return this.body = yield render('index');
}