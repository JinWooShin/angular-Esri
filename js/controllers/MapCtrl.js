/**
 * Created by Jin Woo Shin on 12/5/2014.
 */
(function() {
    'use strict';

    angular.module('app')
    .controller('MapCtrl', ['$rootScope', '$scope', '$attrs', 'MapService',
        function($rootScope, $scope, $attrs, MapService) {

            var self = this;
            var mapDiv, layers = [];

            this.init = function(element) {
                if(!$attrs.id) {
                    throw new Error('\'id\' is required for a map.');
                }
                self.$element = element;
                self.createDiv();
                self.createMap();
            };
            this.createDiv = function() {
                mapDiv = document.createElement('div');
                mapDiv.setAttribute('id', $attrs.id);
                self.$element.removeAttr('id');
                self.$element.append(mapDiv);
            };
            this.createMap = function() {
                var options = {
                    center: $attrs.center ? JSON.parse($attrs.center) : [-56.049, 38.485],
                    zoom: $attrs.zoom ? parseInt($attrs.zoom) : 2,
                    basemap: $attrs.basemap ? $attrs.basemap : 'streets'
                };
                $scope.map = MapService.getMap($attrs.id, options);

                $scope.map.on('load', function() {
                    $rootScope.$broadcast('map-load');
                });
                $scope.map.on('click', function(e) {
                    $rootScope.$broadcast('map-click', e);
                });
                if(layers.length>0) {
                    $scope.map.addLayers(layers);
                    layers = [];
                }
            };

            $scope.addLayer = function(layer) {
                if($scope.map) {
                    $scope.map.addLayer(layer);
                } else {
                    layers.push(layer);
                }
            };
    }])

    .directive('esriMap', function() {
       return {
           restrict: 'EA',
           controller: 'MapCtrl',
           link: function(scope, element, attrs, ctrl) {
               ctrl.init(element);
           }
       }
    });

}).call(this);