app.controller('navController', ['$scope',  function($scope ){
	$scope.isCollapsed = true;
}]);

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
	$scope.webDetail = function(projectName) {
		$uibModal.open({
			animation: true,
            resolve: {
				name: function () {
					return projectName;
                }
			},
			templateUrl: 'partials/portfolio/webDetail.html',
			controller: 'projectInstanceCtrl'
		});
	};

}]);

app.controller('projectInstanceCtrl', ['$scope', 'name', function($scope, name){
	$scope.slidesInterval = 3000;
	$scope.noWrapSlides = false;

	var laravelSlides = [
		{image: 'css/images/projects/laravel/create-page.jpg', text: 'Create Project'},
		{image: 'css/images/projects/laravel/edit-page.jpg', text: 'Edit Page'},
		{image: 'css/images/projects/laravel/output-page.jpg', text: 'Output Page'},
		{image: 'css/images/projects/laravel/edit-single-project.jpg', text: 'Edit Single Project'},
		{image: 'css/images/projects/laravel/group-bar-chart.jpg', text: 'Group Bar Chart'},
		{image: 'css/images/projects/laravel/single-bar-chart.jpg', text: 'Single Bar Chart'},
		{image: 'css/images/projects/laravel/stacked-bar-chart.jpg', text: 'Stacked Bar Chart'}
	];

	var surveySlides = [
		{image: 'css/images/projects/surveys/vaccination.jpg', text: 'Survey Example 1'},
		{image: 'css/images/projects/surveys/sansom.jpg', text: 'Survey Example 2'},
		{image: 'css/images/projects/surveys/hand_wash.jpg', text: 'Survey Example 3'}
	];

	if(name == 'laravel'){
		$scope.webSlides = laravelSlides;
	}else if(name == 'survey'){
		$scope.webSlides = surveySlides;
	}

}]);

//Contact Page
app.controller('contactController', ['$scope', function($scope){

}])