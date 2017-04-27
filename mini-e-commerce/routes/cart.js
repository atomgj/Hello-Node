module.exports = function(app){
	

	app.post('/addCart', function(req, res){

		var body = req.body;
		var Cart = global.dbHelper.getModel('cart');
		var user = req.session['user'];
		var Commodity = global.dbHelper.getModel('commodity');
		Commodity.find({_id: body._id}, function(err, _doc){
			var doc = _doc[0];
			var item = {
						uId : user._id,
						cId : doc._id,
						cName: doc.name,
						cPrice: doc.price,
						cQuantity: 1,
						cStatus: false
					};
					Cart.create(item, function(err2, __doc){
						res.sendStatus(200);
					});
				});
	});
	app.post('/delCart', function(req, res){
		
		var body = req.body;
		var user = req.session['user'];
		var Cart = global.dbHelper.getModel('cart');
		console.log({
			cId: body._id,
			uId: user._id
		})
		Cart.remove({
			cId: body._id,
			uId: user._id
		},function(err, doc){
			if(doc){
				console.log('doc');
				res.sendStatus(200);
			}else{
				console.log(err);
			}
		});
	});
	app.get('/cart', function(req, res){
		if(req.session && req.session['user']){
                        var Cart = global.dbHelper.getModel('cart');
                        Cart.find({}, function(err, docs){
                                res.render('cart', {carts: docs});
                        });
                }else{
                        res.redirect('/login');
                }
	});
	
}
