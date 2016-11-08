'use strict';

const app = angular.module('redditClone', ['ngRoute', 'ngAnimate', 'ngCookies'])

app.config(($routeProvider, $locationProvider) => {
	$routeProvider
		.when('/', {
			templateUrl: '../views/frontPage.html',
			controller: 'redditControl'
		})
		.when('/login', {
			templateUrl: '../views/login.html',
			controller: 'auth'
		})
	$locationProvider.html5Mode(true);
})
