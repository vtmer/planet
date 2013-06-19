define([
       'jquery',
       'overflow',
       'underscore',
       'backbone',
       'collections/PostsCollection',
       'text!templates/posts.html',
       'views/PostView'
], function($, overflow, _, backbone, PostsCollection, PostsTmpl, PostView) {
    return backbone.View.extend({
        el: $('#posts'),
        loadingEl: $('.loading'),

        render: function() {
            var posts = new PostsCollection(), data,
                self = this;

            this.$el.html(PostsTmpl);

            posts.on('sync', function(posts) {
                var uniqPosts, view,
                    cached = self.$el.html();

                uniqPosts = _.uniq(posts.models, function(post) {
                    return post.get('author');
                });
                _.each(uniqPosts, function(post) {
                    view = new PostView({model: post});
                    cached += view.render();
                });

                self.loadingEl.fadeOut();
                self.$el.html(cached);
            });

            posts.fetch();

            return this;
        }
    });
});
