#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["学生通讯表"];
var file = '学生通讯表.txt';

module.exports = function(){
  
  //fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));

  var student = global.student;
  var str = "";
  for(i in student){
    var time = parseInt(Math.random() * 10, 10);
    for(var j = 0; j < time; j++){
      var line = [];
      line.push(i);
      line.push(student[i][1]);
      line.push(['2011', '2012'][parseInt(Math.random() * 2, 10)]+'-'+(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][parseInt(Math.random() * 12, 10)])+'-'+parseInt(Math.random() * 30, 10));
      line.push(parseInt(Math.random() * 59, 10));
      str += line.join(',')+'\n';
    }
  }

  fw.append(file, str);
};


