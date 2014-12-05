/**
 * Created by jwshin on 12/5/2014.
 */
(function() {
    "use strict";
    define([
        'angular'
    ], function(angular) {
        function init(App) {

            App.directive("layoutPanel", function() {
                return {
                    restrict: 'EA',
                    controller: 'PanelCtrl',
                    templateUrl: require.toUrl('Templates/panel.html'),
                    scope: {
                      type: "="
                    },
                    link: function(scope, element, attrs, ctrl) {

                    }
                };
            });
        };

        return {start:init};
    });
}).call(this);