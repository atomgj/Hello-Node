module.exports = function(app){
	app.get('/addcommodity', function(req, res){
		res.render('addcommodity');
	});
	app.post('/addcommodity', function(req,res){
		var body = req.body,
		Commodity = global.dbHelper.getModel('commodity');
		console.log("####")
		console.log(body);
		Commodity.create(
			{
				name: body.name,
				price: body.price,
			 	imgSrc:'images/cm.png'
			},
			function(err, doc){
				if(doc){
					console.log(doc);
					res.sendStatus(200)
				}else{
					console.log('---------add commodity failure')
					console.log(err);
					res.sendStatus(404);
				}
			}
		);	
	});
}
