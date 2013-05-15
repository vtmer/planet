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

        render: function() {
            var posts = new PostsCollection(), data,
                self = this;

            this.$el.html(PostsTmpl);

            posts.on('sync', function(posts) {
                var uniqPosts, view;

                uniqPosts = _.uniq(posts.models, function(post) {
                    return post.get('author');
                });
                _.each(uniqPosts, function(post) {
                    view = new PostView({model: post});
                    self.$el.html(self.$el.html() + view.render());
                });
            });

            posts.fetch();

            return this;
        }
    });
});
