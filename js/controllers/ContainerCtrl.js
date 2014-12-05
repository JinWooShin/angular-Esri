/**
 * Created by jwshin on 12/5/2014.
 */
(function() {
    'use strict';
    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller('ContainerCtrl', ['$scope,', '$rootScope', '$element', function($scope, $rootScope, $element) {
                $scope.panels = [];
                $scope.$watchCollection('panels', function(newVal, oldVal) {
                    if(newVal.length !== oldVal.length) {
                        resize();
                    }
                }, true);
                $scope.addPanel = function(type) {

                };
                $scope.removePanel = function(panelId) {

                };
                $scope.openPanel = function(panelId) {

                };
                $scope.closePanel = function(panelId) {

                };
                function resize() {
                    var total = 0;
                    angular.forEach($scope.panels, function(panel) {
                        total = panel.width + panel.pad;
                    });
                    $element[0].style.width = ((total > 300) ? 300 : total ) + "px";
                }
            }]);

            App.directive('panelContainer', function() {
               return {};
            });
        }
        return {start: init};
    });
}).call(this);