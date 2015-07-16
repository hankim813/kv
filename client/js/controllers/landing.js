'use strict';

angular
	.module('kvApp')

	.controller('LandingController', ['$window', '$location', function($window, $location) {
		var vm = this;

		// Vertical Centering
		var parent = document.getElementById('parent');
		if (parent) parent.style.height = $window.innerHeight + 'px';

	}]);