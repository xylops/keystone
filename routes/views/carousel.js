var keystone = require('keystone');
carousel = keystone.list('carousel')

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'carousel';

	// view.query('carousel', keystone.list('carousel').model.find().populate('author').exec(function(data, err){
	// 	console.log(data)
	// 	res.send(data)
	// }))

	keystone.list('carousel').model.find().populate('author').exec().then(function (data, err) {
		console.log(data)
		res.send(data)
	})

	// Render the view
	// view.render('carousel');

};
