'use strict';

angular
	.module('kvApp')

	.controller('LandingController', ['$window', '$location', function($window, $location) {
		var vm = this;

		// Vertical Centering
		var parent = document.getElementById('parent');
		parent.style.height = $window.innerHeight + 'px';

		// Active Link Init
		vm.isActiveAnchor = isActiveAnchor;

		function isActiveAnchor (currentAnchor) {
			return $location.path() === currentAnchor;
		};
	}]);