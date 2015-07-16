'use strict';

angular
	.module('kvApp')

	.controller('NavController', ['$window', '$location', function($window, $location) {
		var vm = this;

		// Active Link Init
		vm.isActiveAnchor = isActiveAnchor;

		function isActiveAnchor (currentAnchor) {
			return $location.path() === currentAnchor;
		};
	}]);
