module.exports = function(app){
	app.get('/register', function(req, res){
		res.render('register');
	});
	app.post('/register', function(req, res){
		var User = global.dbHelper.getModel('user');
		var body = req.body;
		console.log(body);
		User.findOne({name: body.username}, function(error, docs){
			if(docs){
				console.log(docs);
				res.sendStatus(500);
			}else{
				User.create({
					name: body.username,
					password: body.password
				}, function(err, doc){
					if(err){
						res.sendStatus(500);
					}else{
						console.log(doc);
						res.sendStatus(200);
					}
				});
			}
		});
	});
};
