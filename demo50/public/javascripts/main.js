var register;


register = function(){
	var data  = {};
	data.username = $('#username').val();
	data.password = $('#password').val();
	data.password1 = $('#password1').val();

	$.ajax({
		url: '/register',
		type: 'POST',
		data: data,
		success: function(data, status){
			if(status == 'success'){
				location.href = 'login';
			}
		},
		error: function(data, status){
			location.href = 'login';
		}
	});
};
