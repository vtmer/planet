define([
       'jquery',
       'backbone',
       'collections/ThemesCollection'
], function($, backbone, themes) {
    $('head').append(themes.where({ author: 'sherry' })[0].stylesheet());
    return backbone.View.extend({
    });
});
