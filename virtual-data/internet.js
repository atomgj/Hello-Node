#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["学生上网表"];
var file = '学生上网表.txt';

module.exports = function(){
  
  fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));

  var student = global.student;
  
  for(i in student){
    
    var time = parseInt(Math.random() * 10, 10);
    for(var j = 0; j < time; j++){
      var line = [];
      line.push(i);
      line.push(student[i][1]);
      line.push(['0:00-5:59', '6:00-11:59', '12:00-17:59', '18:00-24:00'][parseInt(Math.random() * 4, 10)]);
      line.push(['2011', '2012'][parseInt(Math.random() * 2, 10)]+'-'+['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][parseInt(Math.random() * 12, 10)]+'-'+parseInt(Math.random() * 30, 10));
      line.push(parseInt(Math.random() * 6, 10) + 1);
      line.push(['新闻', '视频', '体育', '电影', '教育'][parseInt(Math.random() * 5, 10)]);
      fw.append(file, line.join(','));
    }
  }
};


