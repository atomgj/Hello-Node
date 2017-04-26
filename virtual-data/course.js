#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["学生课程表"];
var file = '学生课程表.txt';

module.exports = function(){
  
  //fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));

  var student = global.student;
  
  for(i in student){
    
    var kc = require('./kecheng')(student[i][7]);
    for(var j = 0; j < kc.length; j++){
      if(kc[j]){
        var line = [];
        line.push(i);
        line.push(student[i][1]);
        line.push(kc[j]);
        var qz = parseInt(Math.random() * 100, 10);
        var qm = parseInt(Math.random() * 100, 10);
        line.push(qz<60?60:qz);
        line.push(qm<60?60:qm);
        fw.append(file, line.join(','));
      }
    }
  } 

};


