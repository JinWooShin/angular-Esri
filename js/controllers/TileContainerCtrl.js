/**
 * Created by jwshin on 12/8/2014.
 */
(function() {
    'use restrict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {

            App.controller('TileContainerCtrl', ['$rootScope', '$scope', 'PanelProvider', function($rootScope, $scope, PanelProvider) {
                $scope.getPanels = function() {
                    return PanelProvider.getPanels();
                };

            }]);
            App.directive('tileContainer', ['$window', function($window) {
               return {
                   restrict: 'EA',
                   templateUrl: 'js/templates/tileContainer.html',
                   controller: 'TileContainerCtrl',
                   link: function(scope, element) {
                       element.children().css("height", (window.innerHeight - 16 - 10 /*scrollbar height*/) + "px");
                   }
               }
            }]);
        };
        return {start: init};
    });
}).call(this);