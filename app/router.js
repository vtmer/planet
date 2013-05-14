define([
    'backbone',
    'views/PostsView'
], function(backbone, PostsView) {
    var AppRouter, kickoff;

    AppRouter = backbone.Router.extend({
        routes: {
            '*action': 'showPosts'
        }
    });

    kickoff = function() {
        var router = new AppRouter();

        router.on('route:showPosts', function(action) {
            var view = new PostsView();
            view.render();
        });

        backbone.history.start();
    };

    return {
        kickoff: kickoff
    };
});
