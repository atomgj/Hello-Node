$(function(){

   $.ajax({
       url : "http://127.0.0.1:3000/commodity",
       type: "POST",
       success: function(data, status){
           if(status == 'success'){
               $('.content').text(data);
           }
       },
       error : function(data, status){
           console.log(data);
       }

   });
});