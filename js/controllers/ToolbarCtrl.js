/**
 * Created by Jin Woo Shin on 12/6/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller('ToolbarCtrl', ['$rootScope',  '$scope', '$attrs', function ($rootScope, $scope, $attrs){
                $scope.openMapPanel = function() {
                    console.log("Click map open");
                };
                $scope.openSearchPanel = function() {

                };
                $scope.openBrowserPanel = function() {

                };
                $scope.saveStatus = function() {
                    var panelStatus = [];
                }
            }]);
            App.directive('toolbar', function() {
               return {
                   restrict: 'EA',
                   templateUrl: 'js/templates/toolbar.html',
                   controller: 'ToolbarCtrl'
               }
            });
        };
        return {start: init};
    })
}).call(this);