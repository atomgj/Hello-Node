module.exports = function(){
  var data = require('./yx');
  var i, yuanArr = [], yuan = '';
  for(i in data){
    if(data.hasOwnProperty(i)){
      yuanArr.push(i);
    }
  }
  yuan = yuanArr[parseInt(Math.random() * 2, 10)];
  zhuanye = data[yuan][parseInt(Math.random() * data[yuan].length, 10)];
  return [yuan, zhuanye];
  
}