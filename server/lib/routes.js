
/**
 * Module dependencies.
 */

var render = require('./render');

/**
 * Quality
 *
 * endpoint: '/everlane/quality'
 * @public
 */

exports.quality = function *() {
	this.status = 200;
	return this.body = yield render('index');
}