module.exports = function(app){

	app.get('./login', function(req, res){
		console.log('come in ');
		res.render('login');
	});


	app.post('./login', function(req, res){
		var User = global.dbHelper.getModel('user'),
			body = req.body;
		User.findOne({name: body.username}, function(err, doc){
			console.log('post login in')
			if(doc){
				console.log(doc);
				res.sendStatus(200);
			}else{		
				console.log(err);
				res.sendStatus(500);		
			}
		});
	});
};
