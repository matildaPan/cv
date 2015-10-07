var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'duScroll'])
	.value('duScrollDuration', 1000)
	.value('duScrollOffset', 90);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home', {
			url: '/home', 
			templateUrl: 'partials/home/home.html',
			controller: 'homeController'
		})
		.state('portfolio', {
			url: '/portfolio',
			templateUrl: 'partials/portfolio/portfolio.html',
			//controller: 'portfolioController'
		});
});
