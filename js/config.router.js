'use strict';

/**
 * Config for the router
 */
angular.module('myApp')
  .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

      	$urlRouterProvider
		   .otherwise('/main');
	      $stateProvider
		    .state('main', {
			    url: '/main',
			    templateUrl: 'pages/app.html',
			    controller: 'mainController'
			})

//		    .state('production', {
//			    url: '/production',
//			    templateUrl: 'pages/blocks/production.html'
//
//		    })
      		.state('main.create', {
      		url: '',      //keep the url empty, so this will make it match the same url as it's parent state url, because it appends nothing to the parent url.
      		templateUrl: 'pages/blocks/production/create.html'
      		}) 
      		.state('main.edit', {
      			url: '/edit',
      			templateUrl: 'pages/blocks/production/edit.html'
      		})

      	.state('main.delete', {
      		url: '/delete',
      		templateUrl: 'pages/blocks/production/delete.html'
      	});


      }]
  );