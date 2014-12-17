/**
 * Created by jwshin on 12/16/2014.
 */
(function() {
    "use strict";

    define([
        'esri/map',
        'esri/layers/ArcGISDynamicMapServiceLayer',
        'esri/layers/FeatureLayer',
        'esri/layers/GraphicsLayer'
    ], function(Map, ArcGISDynamicMapServiceLayer, FeatureLayer, GraphicsLayer) {
    angular.module('app')
        .provider('MapService', [function() {
            var map = null;
            var layers = [];
            this.$get = function() {
                return {
                    getMap: function(id, options) {
                        map = new Map(id, options);
                        if(layers.length>0) {
                            map.addLayers(layers);
                        }
                        return map;
                    },
                    addLayer: function(layer) {
                        if(map) {
                            map.addLayer(layer);
                        } else {
                            layers.push(layer);
                        }
                        return layer;
                    },
                    getFeatureLayer: function(url, options) {
                        var layer = new FeatureLayer(url, options);
                        return layer;
                    },
                    getArcGISDynamicMapLayer: function(url, options) {
                        var layer = new ArcGISDynamicMapServiceLayer(url, options);
                        return layer;
                    }
                }
            }
        }])
    })
}).call(this);