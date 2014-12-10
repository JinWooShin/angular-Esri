/**
 * Created by jwshin on 12/8/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller("PanelCtrl", ['$scope', '$rootScope', '$element', '$log', 'PanelProvider', function($scope, $rootScope, $element, $log, PanelProvider) {
                $scope.addChildPanel = function() {
                    console.log($scope.panel);
                };
                $scope.toggleLock = function() {
                    $scope.panel.lock = !$scope.panel.lock;
                };
                $scope.closePanel = function() {
                    if(!$scope.panel.lock) {
                        PanelProvider.removePanel($scope.panel);
                    } else {
                        $log.debug("Cannot close locked panel");
                    }
                }


                $scope.getStyle = function() {
                    var panels = PanelProvider.getPanels();
                    if (panels.length>0) {
                        $element.children()[0].style.height = (window.innerHeight - 28 - 10 /*scrollbar height*/) + "px";
                    }
                };
            }]);


            App.directive("layoutPanel", function() {
                return {
                    restrict: 'EA',
                    controller: 'PanelCtrl',
                    templateUrl: 'js/Templates/panel.html',
                    scope: {
                        panel:"="
                    },
                    link: function(scope, element) {
                        element.children().css("height", (window.innerHeight - 18 - 10 /*scrollbar height*/) + "px");
                    }
                };
            });
        };
        return {start: init};
    });
}).call(this);