var keystone = require('keystone');
var Types = keystone.Field.Types;

var carousel = new keystone.List('carousel', {
    autokey: { path: 'slug', from: 'title', unique: true },
});

carousel.add({
    title: { type: String},
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
    author: { type: Types.Relationship, ref: 'User', index: true },
    publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
    image: { type: Types.Text },
    content: { type: Types.Text },
    special: { type: Types.Boolean },
    categories: { type: Types.Relationship, ref: 'carouselCate', many: true },
});

carousel.register();
