/**
 * Created by Jin Woo Shin on 12/3/2014.
 */
(function() {
    'use strict';

    define([
        'angular',
        'esri/map'
    ], function(angular, Map) {
        function indexCtrl($scope) {
            $scope.test = "TEST";
        }

        function init(App) {
            App.controller('indexCtrl', ['$scope', indexCtrl]);
            return indexCtrl;
        }
        return {start: init};
    })
}).call(this);