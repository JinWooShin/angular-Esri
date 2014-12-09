/**
 * Created by Jin Woo Shin on 12/4/2014.
 */
(function() {
    "use strict";

    define([
        'angular',
        'controllers/indexCtrl',
        'controllers/MapCtrl',
        'controllers/ToolbarCtrl',
        'controllers/TileContainerCtrl',
        'services/PanelService',
        'controllers/PanelContainerCtrl',
        'controllers/PanelCtrl'
    ], function(angular, indexCtrl, MapCtrl, ToolbarCtrl, TileContainer, PanelService, PanelContainerCtrl, PanelCtrl) {
        function init() {
            var App = angular.module('app', ['ui.bootstrap']);

            PanelService.start(App);

            indexCtrl.start(App);
            MapCtrl.start(App);
            ToolbarCtrl.start(App);
            TileContainer.start(App);
            PanelContainerCtrl.start(App);
            PanelCtrl.start(App);


            angular.bootstrap(document.body, ['app']);
            return App;
        }
        return {start: init};
    });
}).call(this);