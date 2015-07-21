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
				templateUrl: 'views/landing.html',
				controller: 'LandingController',
				controllerAs: 'app'
			})

			.state('rapport', {
				url: '/everlane/rapport',
				templateUrl: 'views/rapport.html'
			})

			.state('quality', {
				url: '/everlane/quality',
				templateUrl: 'views/quality.html'
			})

			.state('engagement', {
				url: '/everlane/engagement',
				templateUrl: 'views/engagement.html'
			})

			.state('transparency', {
				url: '/everlane/transparency',
				templateUrl: 'views/transparency.html'
			})

			.state('rebel', {
				url: '/everlane/rebel',
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
         // to be used for back button //won't work when page is reloaded.
         if (fromState.name === '') {
         	 $rootScope.previousState = 'main'
         } else {
	         $rootScope.previousState = fromState.name;
         }
     });
     //back button function called from back button's ng-click="back()"
     $rootScope.back = function() {
        $state.go($rootScope.previousState);
     };
 });


