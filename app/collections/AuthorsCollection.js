define([
    'backbone',
    'underscore',
    'models/AuthorModel'
], function(backbone, _, AuthorModel) {
    var collection = backbone.Collection.extend({
        model: AuthorModel,

        get_by_domain: function(domain) {
            return this.find(function(author) {
                return author.get('domain') === domain;
            });
        }
    });
    
    return new collection([
        { domain: 'www.vinqon.com', name: '咏聪' },
        { domain: 'seventhZhao.github.com', name: '潇滨' }
    ]);
});
