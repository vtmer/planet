module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
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
                }
            }
        },
        watch: {
            app: {
                files: ['app/**'],
                tasks: ['requirejs:compile'],
                options: {
                    debounceDelay: 1000
                }
            },
            style: {
                files: ['static/css/style.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
};
