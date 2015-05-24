//http://markcoleman.tumblr.com/post/47017158060/add-class-to-element-when-scrolling-in-angularjs
//http://jsfiddle.net/eTTZj/30/
'use strict';
angular.module('ngAppear', [])
    .value('ngAppearTopOffset', -10)
    .value('ngAppearLeftOffset', 0)
    .directive("ngAppear", [
        '$window', 'ngAppearTopOffset', 'ngAppearLeftOffset', function($window, ngAppearTopOffset, ngAppearLeftOffset) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var model = attrs.ngAppear;
                    function appear(e) {
                        $window = angular.element(window);
                        var windowLeft = $window.scrollLeft();
                        var windowTop = $window.scrollTop();
                        var offset = e.offset();
                        var left = offset.left;
                        var top = offset.top;
                        if (top + e.height() >= windowTop &&
                            top - ngAppearTopOffset <= windowTop + $window.height() &&
                            left + e.width() >= windowLeft &&
                            left - ngAppearLeftOffset <= windowLeft + $window.width()) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                var resetEvent = scope.$on('ngAppear.reset', function () {
                    scope[model] = appear(element);
                    if (scope[model]) resetEvent();
                });
                }
            };
        }
    ]);