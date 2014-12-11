/**
 * Created by Jin Woo Shin on 12/6/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller('ToolbarCtrl', ['$rootScope',  '$scope', '$attrs', 'PanelProvider', function ($rootScope, $scope, $attrs, PanelProvider){
                $scope.goHome = function() {
                    PanelProvider.clear();
                };
                $scope.openPanel = function(type) {
                    PanelProvider.addPanel(type);
                };
                $scope.saveStatus = function() {
                    PanelProvider.saveAllPanels();
                }
            }]);
            App.directive('toolbar', ['$window', 'ResizeService', function($window, ResizeService) {
               return {
                   restrict: 'EA',
                   templateUrl: 'js/templates/toolbar.html',
                   controller: 'ToolbarCtrl',
                   link: function() {
                       angular.element($window).bind("resize", function() {
                           ResizeService.setHeight()
                       });
                       ResizeService.setHeight();
                   }
               }
            }]);
        }
        return {start: init};
    })
}).call(this);