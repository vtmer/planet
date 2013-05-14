require.config({
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
    }
});

require([
        'app'
], function(app) {
    console.log('hello world');

    app.kickoff();

    return {};
});
