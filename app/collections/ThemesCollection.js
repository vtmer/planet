define([
    'backbone',
    'models/ThemeModel'
], function(backbone, ThemeModel) {
    var ThemeCollection = backbone.Collection.extend({
        model: ThemeModel
    });
    return new ThemeCollection([{ author: 'sherry' }]);
});
