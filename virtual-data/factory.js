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
  }
  
  return factory;
};