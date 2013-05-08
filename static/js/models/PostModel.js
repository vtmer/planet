define([
    'backbone'
], function(backbone) {
    return backbone.Model.extend({
        defaults: {
            author: '',
            title: '',
            content: '',
            link: '',
            pubDate: ''
        },

        parse: function(raw) {
            var _content, _author;

            _content = function(raw) {
                var type;

                if (raw['content:encoded'] !== undefined &&
                           typeof raw['content:encoded'] === 'string') {
                    return raw['content:encoded'];
                } else if (raw.description !== undefined &&
                    typeof raw.description === 'string') {
                    return raw.description;
                } else if (raw.content !== undefined) {
                    type = typeof raw.content;
                    if (type === 'string') {
                        return raw.content;
                    } else if (type === 'object') {
                        if (raw.content.content !== undefined &&
                            typeof raw.content.content === 'string') {
                            return raw.content.content;
                        }
                    }
                    return '';
                }
            };

            _author = function(raw) {
                var type;

                if (raw['dc:creator'] !== undefined) {
                    return raw['dc:creator'];
                } else if (raw.author !== undefined) {
                    type = typeof raw.author;
                    if (type === 'string') {
                        return raw.author;
                    } else if (type === 'object') {
                        return raw.author.name;
                    }
                }
                return '';
            };

            return {
                link: raw.link,
                title: raw.title,
                pubDate: raw.pubDate,
                content: _content(raw),
                author: _author(raw)
            };
        }
    });
});
