var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/education', {
                templateUrl : 'pages/education.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/skill', {
                templateUrl : 'pages/skill.html',
                controller  : 'contactController'
            });

});