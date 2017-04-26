module.exports = function(datum){
  
  var factory = {};
  
  factory._getRandonXueYuan = function(){
    var i, yuanArr = [], yuan = '', data = datum["院系"];
    for(i in data){
      if(data.hasOwnProperty(i)){
        yuanArr.push(i);
      }
    }
    yuan = yuanArr[parseInt(Math.random() * 2, 10)];
    zhuanye = data[yuan][parseInt(Math.random() * data[yuan].length, 10)];
    return [yuan, zhuanye];
  };
  
  factory._getKeChengByZhuanye = function(key){
    var data = datum["课程"];
    return data[key];
  };
  
  factory._getAllKeCheng = function(){
    var data = datum["课程"], kcArr = [], i, j;
    for(i in data){
      for(j=0;j<data[i].length;j++){
        kcArr.push(data[i][j]);
      }
    }
    return kcArr;
  };
  
  factory._getYuanZhuanYeByKecheng = function(k){
    
      var km = datum["课程"], yx = datum["院系"];
      var i, j, zhuanye = "", yuan = "";
      for(i in km){
        if(km[i].indexOf(k) > -1){
          zhuanye = i;
        }
      }
      for(j in yx){
        if(yx[j].indexOf(zhuanye) > -1){
          yuan = j;
        }
      }
      
      return [yuan,zhuanye,k];
  };
  
  return factory;
};