module.exports = function(app){
	require('./login')(app);
	require('./register')(app);
	require('./addcommodity')(app);
	require('./home')(app);
	require('./cart')(app);
};
