/**
 * Created by jwshin on 12/8/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller("PanelCtrl", ['$scope', '$rootScope', 'PanelService', function($scope, $rootScope, PanelService) {
                $scope.addChildPanel = function() {

                }
            }]);

            App.directive("layoutPanel", function() {
                return {
                    restrict: 'EA',
                    controller: 'PanelCtrl',
                    templateUrl: 'js/Templates/panel.html'
                };
            });
        };
        return {start: init};
    });
}).call(this);