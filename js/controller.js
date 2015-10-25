app.controller('navController', ['$scope', '$state ', function($scope, $state ){
	
}])

// Home Page
app.controller('homeController', ['$scope', '$location', 'textService', function ($scope, $location, textService) {
	$scope.TextObj = textService.getTextData();
}]);

// Portfolio Page
app.controller('portfolioController', ['$scope', '$location', 'textService', '$document', function ($scope, $location, textService, $document) {

	$scope.$on('$includeContentLoaded', function(event, src) {
		if (src == 'partials/portfolio/work_experience.html'){
			var experienceElement = angular.element($('#experience'));
			$document.scrollToElementAnimated(experienceElement);
		}
	});
}]);

//Project Section in Portfolio page
app.controller('projectsController', ['$scope', '$uibModal', function($scope, $uibModal){

	$scope.viewDetail = function() {
		$uibModal.open({
			animation: true,
			templateUrl: 'partials/portfolio/projectDetail.html'
		});
	};
}]);

//Contact Page
app.controller('contactController', ['$scope', function($scope){

}])