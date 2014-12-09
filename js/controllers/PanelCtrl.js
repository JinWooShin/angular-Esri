/**
 * Created by jwshin on 12/8/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
        function init(App) {
            App.controller("PanelCtrl", ['$scope', '$rootScope', '$element', 'PanelService', function($scope, $rootScope, $element,  PanelService) {
                $scope.addChildPanel = function() {
                };



                $scope.getStyle = function() {
                    var panels = PanelService.getPanels();
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
                        element.children().css("height", (window.innerHeight - 28 - 10 /*scrollbar height*/) + "px");
                    }
                };
            });
        };
        return {start: init};
    });
}).call(this);