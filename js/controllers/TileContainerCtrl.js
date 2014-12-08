/**
 * Created by jwshin on 12/8/2014.
 */
(function() {
    'use restrict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {

            App.controller('TileContainerCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {


            }]);

            App.directive('tileContainer', ['$window', function($window) {
               return {
                   restrict: 'EA',
                   templateUrl: 'js/templates/tileContainer.html',
                   controller: 'TileContainerCtrl',
                   link: function(scope, element, attrs, ctrl) {
                       angular.element($window).bind("resize", function(e) {
                           setHeight();
                       });
                       function setHeight() {
                           element.children().css("height", (window.innerHeight - 16) + "px");
                       };
                       setHeight();


                   }
               }
            }]);
        };
        return {start: init};
    });
}).call(this);