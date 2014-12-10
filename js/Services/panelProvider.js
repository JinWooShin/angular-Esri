/**
 * Created by jwshin on 12/10/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.provider('PanelProvider', function() {
                var panels = [];
                var getPanel = function(type) {
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
                    return panel;
                };

                this.panelsConfig = {};
                this.$get = function($rootScope, $log) {
                    return {
                        clear: function() {
                            panels = [];
                        },
                        addPanel: function(type) {
                            panels.push(getPanel(type));
                            $rootScope.$broadcast("panelChanged", panels);
                        },
                        removePanel: function(panel) {
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
                        },
                        savePanel: function(panel) {
                        },
                        saveAllPanels: function() {
                        },
                        restorePanels: function(_panels) {
                            panels = _panels;
                        },
                        getPanels: function() {
                            return panels;
                        },
                        panelConfigs: this.panelsConfig
                    };
                }
            });
        };
        return {start:init};
    })
}).call(this);