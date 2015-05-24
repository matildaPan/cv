var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/education', {
                templateUrl : 'pages/education.html',
                controller  : 'educationController'
            })

            // route for the contact page
            .when('/skill', {
                templateUrl : 'pages/skill.html',
                controller  : 'skillController'
            })
            .otherwise({
                redirectTo: '/'
            });

});