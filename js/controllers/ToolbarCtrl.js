/**
 * Created by Jin Woo Shin on 12/6/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller('ToolbarCtrl', ['$rootScope',  '$scope', '$attrs', 'PanelService', function ($rootScope, $scope, $attrs, PanelService){
                $scope.goHome = function() {
                    PanelService.clear();
                };
                $scope.openPanel = function(type) {
                    PanelService.addPanel(type);
                };
            }]);
            App.directive('toolbar', ['$window', function($window) {
               return {
                   restrict: 'EA',
                   templateUrl: 'js/templates/toolbar.html',
                   controller: 'ToolbarCtrl',
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
    })
}).call(this);