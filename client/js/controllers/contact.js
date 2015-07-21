'use strict';

angular
	.module('kvApp')

	.controller('ContactController', ['$window', '$location', function($window, $location) {
		var vm = this;

		// Catchphrases
		var list = [
			"so, coffee?",
			"well it seems like you should email me.",
			"we can chat over tacos.",
			"wassup muchacho?",
			"Buddy the Elf, what's your favorite color?"
		];

		// Randomly select one
		vm.catchphrase = list[Math.floor(Math.random() * list.length)];

		// Vertical Centering
		var parent = document.getElementById('parent');
		if (parent) parent.style.height = $window.innerHeight + 'px';

	}]);