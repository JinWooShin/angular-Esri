/**
 * Created by Jin Woo Shin on 12/4/2014.
 */
(function() {
    "use strict";

    define([
        'angular',

        //Load services/providers first
        'services/ResizeService',
        'services/PanelProvider',

        //then load controllers
        'controllers/indexCtrl',
        'controllers/ProjectCtrl',
        'controllers/MapCtrl',
        'controllers/ToolbarCtrl',
        'controllers/TileContainerCtrl',
        'controllers/PanelContainerCtrl',
        'controllers/PanelCtrl'
    ], function(angular, ResizeService, PanelProvider,
                ProjectCtrl, indexCtrl, MapCtrl, ToolbarCtrl, TileContainer, PanelContainerCtrl, PanelCtrl) {
        function init(App) {

            App.config(function(PanelProviderProvider) {
                PanelProviderProvider.panelsConfig = {
                    wellInfo: {
                        default: ["toc"]
                    }
                };
            });
            angular.bootstrap(document.body, ['app']);
            return App;
        }
        return {start: init};
    });
}).call(this);