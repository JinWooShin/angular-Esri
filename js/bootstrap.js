/**
 * Created by Jin Woo Shin on 12/4/2014.
 */
(function() {
    "use strict";

    define([
        'angular',

        'services/ResizeService',
        'services/PanelProvider',

        'controllers/indexCtrl',
        'controllers/MapCtrl',
        'controllers/ToolbarCtrl',
        'controllers/TileContainerCtrl',
        'controllers/PanelContainerCtrl',
        'controllers/PanelCtrl'
    ], function(angular, ResizeService, PanelProvider, indexCtrl, MapCtrl, ToolbarCtrl, TileContainer, PanelContainerCtrl, PanelCtrl) {
        function init() {
            var App = angular.module('app', ['ui.bootstrap', 'ngAnimate']);



            PanelProvider.start(App);
            ResizeService.start(App);

            indexCtrl.start(App);
            MapCtrl.start(App);
            ToolbarCtrl.start(App);
            TileContainer.start(App);
            PanelContainerCtrl.start(App);
            PanelCtrl.start(App);

            App.config(function(PanelProviderProvider) {
                PanelProviderProvider.panelsConfig = {
                    map: {
                        title: "Map"
                    }
                };
            });

            angular.bootstrap(document.body, ['app']);
            return App;
        }
        return {start: init};
    });
}).call(this);