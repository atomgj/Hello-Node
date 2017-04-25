module.exports = function(km, yx, k){
  
  
    var i, j, zhuanye = "", yuan = "";
    for(i in km){
      if(km[i].indexOf(k) > -1){
        zhuanye = i;
      }
    }
    for(j in yx){
      console.log(yx[j])
      if(yx[j].indexOf(zhuanye) > -1){
        yuan = j;
      }
    }
    
    return [yuan,zhuanye,k];
}