'use strict';

angular
	.module('kvApp')

	.controller('GalleryController', ['$window', '$location', function($window, $location) {
		var vm = this;

		// Vertical Centering
		var parent = document.getElementById('parent');
		if (parent) parent.style.height = $window.innerHeight + 'px';

		var currentIndex = 0;
		vm.list = [];
		for (var i = 0; i < 9; i++) {
			var img = i + 1 + '.png';
			vm.list.push(img);
		}
		var captions = [
			'I\'m Persian, like the rug.',
			'The legends are true... #seattle #noRain',
			'It\'s no yellow submarine but...',
			'If my soul were a pair of shoes.',
			'All I need is a plain white tee.',
			'Yes, organic toothpaste is a thing.',
			'And yes, so are organic toothbrushes.',
			'Cilantro is my life.',
			'Muffin - we have a love/hate relationship.',
			'You know nothing, Archie Andrews.',
			'Horrible eyesight, classic eyewear.',
			'Every tea cup deserves a plate for a mate.',
			'My soldiers celebrating yet another victory.',
			'Mochi, my guardian in the night.'
		];

 		// Current image on display
 		function updateSet(index) {
 			currentIndex = index;
 			vm.currentImg = vm.list[index];
 			vm.currentCaption = captions[index];
 			$location.hash(currentIndex);

 		}
 		vm.updateSet = updateSet;

		// Gallery nav buttons
		vm.prev = function() {
			if (currentIndex !== 0) {
				currentIndex--;
			} else {
				currentIndex = 8;
			}
			updateSet(currentIndex);
		}

		vm.next = function() {
			if (currentIndex === 8) { 
				currentIndex = 0; 
			} else { 
				currentIndex++ 
			};
			updateSet(currentIndex);
		}

		// TODO: Apply hover class on currentImg

		// Check what the currentIndex is via anchorlink
		var currentHash = $location.hash();
		if (currentHash) currentIndex = currentHash;

		updateSet(currentIndex);
	}]);