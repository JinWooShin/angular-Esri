/**
 * Created by jwshin on 12/5/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller('ToolbarCtrl', ['$rootScope',  '$scope', '$attrs', 'PanelService', function ($rootScope, $scope, $attrs, PanelService){

                $scope.getPanels = function() {
                    return PanelService.getPanels();
                };
                $scope.$on("panelChanged", function(event, panels) {
                    $scope.panels = $scope.getPanels();
                });
                $scope.panels = $scope.getPanels();


            }]);

            App.directive("panelContainer", function() {
                return {
                    restrict: 'EA',
                    controller: 'PanelContainerCtrl',
                    templateUrl: 'js/Templates/panelContainer.html'
                };
            });
        };

        return {start:init};
    });
}).call(this);