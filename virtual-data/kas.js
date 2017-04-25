module.exports = function(){
  var km = require('./km'), kcArr = [], i, j;
  for(i in km){
    for(j=0;j<km[i].length;j++){
      kcArr.push(km[i][j]);
    }
  }
  return kcArr;
}