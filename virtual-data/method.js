module.exports = function(k){
  
  
    var km = require('./km');
    var yx = require('./yx');
    var i, zy = "", yx = "";
    for(i in km){
      if(km[i].indexOf(k) > -1){
        zy = i;
      }
    }
    
    
    for(i in yx){
      console.log(i);
      if(yx[i].indexOf(zy) > -1){
        yx = i;
      }
    }
    
    return [yx,zy,k];
}