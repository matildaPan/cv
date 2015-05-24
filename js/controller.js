app.controller('homeController', function($scope) {
    $scope.message = 'Home';
    $scope.pageClass= 'page-home';
});

app.controller('educationController', function($scope) {
    $scope.message = 'education';
    $scope.pageClass = 'page-education';
});

app.controller('skillController', function($scope) {
    $scope.message = 'skill';
    $scope.pageClass = 'page-skill';
});