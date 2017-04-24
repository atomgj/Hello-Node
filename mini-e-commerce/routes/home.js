module.exports = function(app){
	app.get('/home', function(req, res){
		if(req.session && req.session['user']){
			var Commodity = global.dbHelper.getModel('commodity');
			Commodity.find({}, function(err, docs){
				console.log(docs);
				res.render('home', {Commoditys: docs});
			});
		}else{
			res.redirect('/login');
		}
	});
}
