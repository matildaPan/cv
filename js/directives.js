angular.module('myApp')
  .directive('googleMap', ['uiLoad','uiGoogleMap', function (uiLoad, uiGoogleMap) {
        return {
            restrict: 'AC',
            link: function (scope, el, attr) {
                uiGoogleMap.mapsInitialized.then(function () {
                    uiGoogleMap.mapIntial(el[0]);
                });
            }
        };
    }]);