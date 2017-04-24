module.exports = function(app){

	app.get('/login', function(req, res){
		res.render('login');
	});

	app.post('/login', function(req, res){
		
		var User = global.dbHelper.getModel('user'),
				body = req.body;
		User.findOne({name: body.username}, function(err, doc){
			if(doc){
				req.session.user = doc;
				console.log(req.session);
				console.log('login success');
				res.sendStatus(200);
			}else{	
				req.session.error = '用户未登录';	
				res.sendStatus(500);		
			}
		});
	});
};
