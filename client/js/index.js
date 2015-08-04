'use strict';

/**
 * @name kvApp
 * @description personal branding website for kiana
 *
 * Main module of app
 */

angular
	.module('kvApp',['ui.router', 'ngAnimate'])

	.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

		// Redirect all invalid routes to main page
		$urlRouterProvider.otherwise('/');

		// Configure states
		$stateProvider

			.state('main', {
				url: '/',
				templateUrl: 'views/main.html',
			})

			.state('landing', {
				url: '/everlane',
				templateUrl: 'views/everlane-landing.html',
				controller: 'LandingController',
				controllerAs: 'app'
			})

			.state('application', {
				url: '/everlane/application',
				templateUrl: 'views/application.html',
				controller: 'ApplicationController',
				controllerAs: 'app'
			})

			.state('gallery', {
				url: '/gallery',
				templateUrl: 'views/gallery.html',
				controller: 'GalleryController',
				controllerAs: 'gallery'
			})

			.state('cover-letter', {
				url: '/everlane/cover-letter',
				templateUrl: 'views/cover-letter.html'
			})

			.state('cover-letter.rapport', {
				url: '/rapport',
				templateUrl: 'views/rapport.html'
			})

			.state('cover-letter.quality', {
				url: '/quality',
				templateUrl: 'views/quality.html'
			})

			.state('cover-letter.engagement', {
				url: '/engagement',
				templateUrl: 'views/engagement.html'
			})

			.state('cover-letter.transparency', {
				url: '/transparency',
				templateUrl: 'views/transparency.html'
			})

			.state('cover-letter.rebel', {
				url: '/rebel',
				templateUrl: 'views/rebel.html'
			})

			.state('contact', {
				url: '/contact',
				templateUrl: '/views/contact.html',
				controller: 'ContactController',
				controllerAs: 'contact'
			});
	}])

	.run(function($rootScope, $state) {
		$rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {
		  if (fromState.name.includes('cover-letter') || $state.current.name === 'application') {
		 		$rootScope.previousState = 'landing';
		 	} else if ($state.current.name === 'landing') {
		 		$rootScope.previousState = 'main';
		  } else if (fromState.name === '' || fromState.name === 'contact') {
		 	  $rootScope.previousState = 'main';
		  } else {
		    $rootScope.previousState = fromState.name;
		  }
		});

		//back button function called from back button's ng-click="back()"
		$rootScope.back = function() {
		  $state.go($rootScope.previousState);
		};
	});


