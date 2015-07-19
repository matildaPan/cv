app.controller('mainController', function ($scope, $location, $anchorScroll) {
	$scope.scrollTo = function (id) {
		//stop the URL from changing to #id
		var old = $location.hash();
		$location.hash(id);
		console.log($location.hash());
		$anchorScroll();
		$location.hash(old);
	};
});

