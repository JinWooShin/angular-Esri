/**
 * Created by Jin Woo Shin on 12/6/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller('ToolbarCtrl', ['$rootScope',  '$scope', 'attrs', function ($rootScope, $scope, $attrs){

            }]);
            App.directive('toolbar', function() {
               return {
                   restrict: 'EA',
                   controller: 'ToolbarCtrl',
                   link: function(scope, element, attrs, ctrl) {
                       ctrl.init(element);
                   }
               }
            });
        };
        return {start: init};
    })
}).call(this);