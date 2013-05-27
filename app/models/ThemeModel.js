define([
       'underscore',
       'backbone'
], function(_, backbone) {
    return backbone.Model.extend({
        defaults: {
            author: 'style'
        },

        stylesheet: function() {
            var link = _.template('<link href="<%= src %>" rel="stylesheet" type="text/css">');
            return link({
                src: 'static/css/' + this.get('author') + '.css'
            });
        },

        author: function() {
            return this.get('author');
        }
    });
});
