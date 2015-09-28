app.controller('mainController', ['$scope', '$location', 'textService', function ($scope, $location, textService) {
	// $scope.scrollTo = function (id) {
	// 	//stop the URL from changing to #id
	// 	var old = $location.hash();
	// 	$location.hash(id);
	// 	console.log($location.hash());
	// 	$anchorScroll();
	// 	$location.hash(old);
	// };

	$scope.TextObj = textService.getTextData();
}]);

