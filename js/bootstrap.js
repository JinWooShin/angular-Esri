/**
 * Created by Jin Woo Shin on 12/4/2014.
 */
(function() {
    "use strict";

    define([
        'angular',
        'controllers/indexCtrl',
        'controllers/MapCtrl'
    ], function(angular, indexCtrl, MapCtrl) {
        function init() {
            var App = angular.module('app', ['ui.bootstrap']);
            indexCtrl.start(App);
            MapCtrl.start(App);

            angular.bootstrap(document.body, ['app']);
            return App;
        }
        return {start: init};
    });
}).call(this);