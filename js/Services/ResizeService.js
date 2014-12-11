/**
 * Created by jwshin on 12/9/2014.
 */
(function() {
    'use strict';

    define([
        'angular'
    ], function(angular) {
       function init(App) {
           App.service('ResizeService', ['$rootScope', function() {

               this.setHeight = function() {
                   var containers = [document.querySelector("#toolbar"), document.querySelector("#tileContainer"), document.querySelector("#panelContainer")];
                   var panels = document.querySelectorAll(".layoutPanel.horizontal");
                   angular.forEach(containers, function(container) {
                       if(container) {
                           container.style.height = (window.innerHeight - 16 - 10 /*scrollbar height*/) + "px";
                       }
                   });
                   angular.forEach(panels, function(panel) {
                       if(panel) {
                           panel.style.height = (window.innerHeight - 18 - 10 /*scrollbar height*/) + "px";
                       }
                   });
               };
           }]);
       }
       return {start: init};
    });
}).call(this);