#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["学生出勤表"];
var file = '学生出勤表.txt';

module.exports = function(){
  
  //fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));

  var student = global.student;
  
  var km = require('./km');
  var yx = require('./yx');
  
  kas = require('./kas')();
  for(i in student){
    var idx = parseInt(Math.random() * 10, 10);
    var line = [];
    line.push(i);
    line.push(student[i][1]);
    line.push(kas[idx]);
    var cq = [10,12,15,20][parseInt(Math.random() * 4, 10)];
    line.push(cq);
    line.push(cq - ([0, parseInt(Math.random() * 4, 10)][parseInt(Math.random() * 2, 10)]));
    
    line.push(['2011', '2012'][parseInt(Math.random() * 2, 10)]+'-'+['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][parseInt(Math.random() * 12, 10)]);
    if(student[i][1]){
      fw.append(file, line.join(','));
    }
  }

};


