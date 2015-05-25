'use strict';

/**
 * Config for the router
 */
angular.module('myApp')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/home');
          $stateProvider
              .state('home', {
                  url: '/home',
                  templateUrl: 'pages/app.html'
              });

      }]
  );