/**
 * Created by jwshin on 12/5/2014.
 */
(function() {
    "use strict";
    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller("PanelContainerCtrl", ['$rootScope', '$scope', 'PanelService', function($rootScope, $scope, PanelService) {
                $scope.getPanels = function() {
                    return PanelService.getPanels();
                };


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