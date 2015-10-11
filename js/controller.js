app.controller('navController', ['$scope', '$state ', function($scope, $state ){
	
}])

app.controller('homeController', ['$scope', '$location', 'textService', function ($scope, $location, textService) {
	$scope.TextObj = textService.getTextData();
}]);

app.controller('portfolioController', ['$scope', '$location', 'textService', '$document', function ($scope, $location, textService, $document) {

	$scope.$on('$includeContentLoaded', function(event, src) {
		if (src == 'partials/portfolio/work_experience.html'){
			var experienceElement = angular.element($('#experience'));
    		$document.scrollToElementAnimated(experienceElement);
		}
    });
}]);