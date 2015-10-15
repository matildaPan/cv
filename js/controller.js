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


app.controller('contactController', ['$scope', function($scope){
	// var myCity = {
	// 	city : 'Toronto',
	// 	desc : 'This is the best city in the world!',
	// 	lat : 43.7000,
	// 	long : -79.4000
	// };

	// var mapOptions = {
	// 	zoom: 4,
	// 	center: new google.maps.LatLng(40.0000, -98.0000),
	// 	mapTypeId: google.maps.MapTypeId.TERRAIN
	// };

	// $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	// $scope.markers = [];
	
	// var infoWindow = new google.maps.InfoWindow();
	
	// var createMarker = function (info){
		
	// 	var marker = new google.maps.Marker({
	// 		map: $scope.map,
	// 		position: new google.maps.LatLng(info.lat, info.long),
	// 		title: info.city
	// 	});
	// 	marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
		
	// 	google.maps.event.addListener(marker, 'click', function(){
	// 		infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
	// 		infoWindow.open($scope.map, marker);
	// 	});
		
	// 	$scope.markers.push(marker);
		
	// }  

	// createMarker(myCity);

	// $scope.openInfoWindow = function(e, selectedMarker){
	// 	e.preventDefault();
	// 	google.maps.event.trigger(selectedMarker, 'click');
	// }

}])