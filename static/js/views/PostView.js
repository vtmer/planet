define([
    'underscore',
    'backbone',
    'text!templates/post.html'
], function(_, backbone, PostTmpl) {
    return backbone.View.extend({
        template: _.template(PostTmpl),

        render: function() {
            return this.template({post: this.model.toJSON()});
        }
    });
});
