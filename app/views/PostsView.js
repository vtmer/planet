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

            console.log('Display some posts');
            this.$el.html(PostsTmpl);

            posts.on('add', function(post) {
                var view =  new PostView({model: post});

                self.$el.html(self.$el.html() + view.render());

                //$('p.content').paraOverflow();
                //console.log($('p.content'));
            });

            posts.fetch();

            return this;
        }
    });
});
