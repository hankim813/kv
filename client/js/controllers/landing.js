'use strict';

angular
	.module('kvApp')

	.controller('LandingController', ['$window', function($window) {
		var vm = this;

		// Vertical centering
		var parent = document.getElementById('parent');
		parent.style.height = $window.innerHeight + 'px';
	}]);