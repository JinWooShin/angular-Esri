/**
 * Created by jwshin on 12/5/2014.
 */
(function() {
    'use strict';
    define([
        'angular'
    ],function(angular) {
        function init(App) {
            App.service('PanelService', ['$rootScope', '$log', function($rootScope, $log){
                var panels = [];
                this.clear = function() {
                    panels = [];
                };
                this.addPanel = function(type) {
                    var panel = {
                        parent: "root",
                        children: [],
                        lock: false,
                        content: {
                            title: type,
                            content: "something goes here"
                        }
                    };
                    panels.push(panel);
                    $rootScope.$broadcast("panelChanged", panels);
                };
                this.removePanel = function(panel) {
                    var matchPanel = panels.filter(function(_panel) {
                        return _panel.$$hashKey === panel.$$hashKey;
                    });
                    if(matchPanel.length>0) {
                        $log.debug("Removing panel: "+ panel.title);
                        panels.splice(panels.indexOf(matchPanel[0]),1);
                        $rootScope.$broadcast("panelChanged", panels);
                    } else {
                        $log.error("Cannot found panel to remove");
                    }
                    console.log("close panel : "+panel.title);
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