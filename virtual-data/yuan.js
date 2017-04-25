module.exports = function(){
  var data = {
    '外国系' : ['英语专业','日语专业','德语专业','西班牙语专业'],
    '电子科学与工程系' : ['电子工程专业','微电子与光电子学专业','信息电子学专业','通信工程专业']
  };
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