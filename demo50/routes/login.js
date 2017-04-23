module.exports = function(app){

	app.get('/login', function(req, res){
		res.render('login');
	});

	app.post('/login', function(req, res){
		
		var User = global.dbHelper.getModel('user'),
				body = req.body;
		User.findOne({name: body.username}, function(err, doc){
			if(doc){
					console.log('login success');
					res.sendStatus(200);
			}else{		
				 res.sendStatus(500);		
			}
		});
	});
};
