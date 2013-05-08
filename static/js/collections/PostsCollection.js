define([
    'backbone',
    'models/PostModel'
], function(backbone, PostModel) {
    return backbone.Collection.extend({
        model: PostModel,

        url: function() {
            return 'http://pipes.yahoo.com/pipes/pipe.run?_id=ed431306cc0e4fdf8ca6bde33b81be9f&_render=json';
        },

        parse: function(resp, opts) {
            return resp.value.items;
        }
    });
});
