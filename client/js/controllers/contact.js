'use strict';

angular
	.module('kvApp')

	.controller('ContactController', ['$window', '$location', '$state', function($window, $location, $state) {
		var vm = this;

		// Catchphrases
		var list = [
			"so, tea?",
			"well it seems like you should email me.",
			"we can chat over mangoes.",
			"wassup muchacho?",
			"Buddy the Elf, what's your favorite color?",
			"what's goin' on, yvonne?",
			'😗🎶',
			'The Big Blue...what\'s it like?'
		];

		// Randomly select one
		vm.catchphrase = list[Math.floor(Math.random() * list.length)];

		// Vertical Centering
		var parent = document.getElementById('parent');
		if (parent) parent.style.height = $window.innerHeight + 'px';

		vm.refreshPage = function (){
			$state.reload();
		};

		vm.jello = function (){
			$('#refreshBtn').addClass('animated jello');
		};

		vm.unjello = function (){
			$('#refreshBtn').removeClass('animated jello');
		};

	}]);