var app = angular.module('myApp', ['ui.router', 'ngAnimate', 'ui.bootstrap'])
	.run(['$anchorScroll', function ($anchorScroll) {
	$anchorScroll.yOffset = 100;   // always scroll by 50 extra pixels
}]);