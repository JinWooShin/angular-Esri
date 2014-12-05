/**
 * Created by Jin Woo Shin on 12/2/2014.
 */
(function() {
    'use strict';

    var pathRX = new RegExp(/\/[^\/]+$/);
    var locationPath = location.pathname.replace(pathRX, '');

    define('angular', function() {
        if(angular) {return angular;}
        return {};
    });

    require({
        async: true,
        alias: [['text', 'dojo/text']],
        packages: [{
            name: 'controllers',
            location: locationPath + '/js/controllers'
        }, {
            name: 'helpers',
            location: locationPath + '/js/helpers'
        }, {
            name: 'services',
            location: locationPath + '/js/services'
        }, {
            name: 'js',
            location: locationPath + '/js'
        }]
    });

    require([
        'dojo/ready',
        'js/bootstrap'
    ], function(ready, bootstrap) {
        ready(function() {
            console.info('start the bootstrapper');
            bootstrap.start();
        });
    });
}).call(this);