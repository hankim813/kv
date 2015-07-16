'use strict';

/**
 * @name kvApp
 * @description personal branding website for kiana
 *
 * Main module of app
 */

angular
	.module('kvApp',['ui.router'])

	.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

		$urlRouterProvider.otherwise('/everlane');

		$stateProvider

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
			});
	}]);