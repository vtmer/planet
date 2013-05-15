define([
    'backbone',
    'collections/AuthorsCollection'
], function(backbone, Authors) {
    return backbone.Model.extend({
        defaults: {
            author: '',
            title: '',
            content: '',
            link: '',
            pubDate: ''
        },

        parse: function(raw) {
            var _content, _author, _domain;

            _domain = (function(raw) {
                var domainRegex = /^http[s]{0,}:\/\/([\w\d\-_\.]+)/;

                if (domainRegex.test(raw.link)) {
                    return domainRegex.exec(raw.link)[1];
                }
                return '';
            })(raw);

            _content = (function(raw) {
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
            })(raw);

            _author = (function(raw) {
                var type, author;

                if (raw['dc:creator'] !== undefined) {
                    return raw['dc:creator'];
                } else if (raw.author !== undefined) {
                    type = typeof raw.author;
                    if (type === 'string') {
                        return raw.author;
                    } else if (type === 'object') {
                        return raw.author.name;
                    }
                } else {
                    author = Authors.get_by_domain(_domain);
                    if (author !== undefined) {
                        return author.get('name');
                    }
                    return _domain;
                }
                return '';
            })(raw);

            return {
                link: raw.link,
                title: raw.title,
                pubDate: raw.pubDate,
                domain: 'http://' + _domain,
                content: _content,
                author: _author
            };
        }
    });
});
