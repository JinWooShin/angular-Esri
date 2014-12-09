/**
 * Created by jwshin on 12/5/2014.
 */
(function() {
    'use strict';
    define([
        'angular'
    ],function(angular) {
        function init(App) {
            App.service('PanelService', ['$rootScope', function($rootScope){
                var panels = [];
                this.clearPanel = function() {
                    panels = [];
                };
                this.addPanel = function(type) {
                    var panel = {
                        title: type,
                        content: "something goes here"
                    };
                    panels.push(panel);
                    $rootScope.$broadcast("panelChanged", panels);

                };
                this.removePanel = function(panel) {

                };
                this.savePanel = function(panel) {

                };
                this.saveAllPanels = function() {

                };
                this.restorePanels = function(_panels) {
                    panels = _panels;
                };
                this.getPanels = function() {
                    return panels;
                };
            }]);
        };
        return {start: init};
    });
}).call(this);