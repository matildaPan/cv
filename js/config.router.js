'use strict';

/**
 * Config for the router
 */
angular.module('myApp')
  .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

      	$urlRouterProvider
		   .otherwise('/home');
      	$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'pages/app.html'
			})
		.state('home.create', {
			url: '',      //keep the url empty, so this will make it match the same url as it's parent state url, because it appends nothing to the parent url.
			templateUrl: 'pages/blocks/create.html',
		})
		.state('home.edit', {
			url: '/ep',
			templateUrl: 'pages/blocks/edit.html'
		});
      	//.state('main', {
      	//	url: '/main',
      	//	onEnter: function() {
      	//		$('html body').animate({
      	//			scrollTop: $("#main").offset().top
      	//		}, 1000);
      	//	}
      	//})
      	//.state('production', {
      	//	url: '/production',
      	//	onEnter: function () {
      	//		$('html body').animate({
      	//			scrollTop: $("#production").offset().top
      	//		}, 1000);
      	//	}
      	//})
      	//  .state('production.create', {
      	//    url: '',      //keep the url empty, so this will make it match the same url as it's parent state url, because it appends nothing to the parent url.
      	//    templateUrl: 'pages/blocks/create.html',
      	//  }) 
      	//  .state('production.edit', {
      	//      url: '/edit',
      	//      templateUrl: 'pages/blocks/edit.html'
      	//  })

      	//.state('production.delete', {
      	//	url: '/delete',
      	//	templateUrl: 'pages/blocks/delete.html'
      	//});


      }]
  );