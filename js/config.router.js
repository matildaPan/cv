'use strict';

/**
 * Config for the router
 */
angular.module('myApp')
  .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/home');
          $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'pages/app.html',
                abstract:true
            })


            .state('home.ed', {
              url: '',      //keep the url empty, so this will make it match the same url as it's parent state url, because it appends nothing to the parent url.
              templateUrl: 'pages/blocks/ed.html',
            })
          
            .state('home.ep', {
                url: '/ep',
                templateUrl: 'pages/blocks/ep.html'
            });
        


      }]
  );