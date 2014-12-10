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
                    var panel = {};
                    switch(type) {
                        case "map":
                            panel = {
                                id: "panel-map",
                                templateUrl: "/js/Templates/panelMap.html",
                                content: {
                                    title: "Map",
                                    content: "Map goes here"
                                }
                            };
                            break;
                        case "search":
                            panel = {
                                id: "panel-search",
                                templateUrl: "",
                                content: {
                                    title: "Search",
                                    content: "Filter goes here"
                                }
                            };
                            break;
                        default:
                            panel = {
                                id: "panel-default",
                                templateUrl: "",
                                content: {
                                    title: type,
                                    content: "Whatever goes here"
                                }
                            }
                            break;
                    };
                    panel.parent = "root";
                    panel.children = [];
                    panel.lock = false;
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