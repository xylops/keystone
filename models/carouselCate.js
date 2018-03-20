var keystone = require('keystone');

var carouselCate = new keystone.List('carouselCate', {
	autokey: { from: 'name', path: 'key', unique: true },
});

carouselCate.add({
	name: { type: String, required: true },
});

carouselCate.relationship({ ref: 'carousel', path: 'carousel', refPath: 'carousel' });

carouselCate.register();
