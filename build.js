({
    baseUrl: 'app',
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: 'libs/jquery/jquery.min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        overflow: 'libs/jquery-overflow/jquery.overflow'
    },
    name: 'main',
    out: 'static/js/app.js'
})
