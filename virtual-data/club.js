#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["学生社团表"];
var file = '学生社团表.txt';

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
      line.push(['理论学习','社会公益','学术科技','文化艺术','体育健身','其他'][parseInt(Math.random() * 6, 10)]);
      line.push(['外国语系','体育系','电子系'][parseInt(Math.random() * 3, 10)]);
      line.push(parseInt(Math.random() * 10, 10));
      line.push(parseInt(Math.random() * 8, 10));
      str += line.join(',')+'\n';
    }
  }
  fw.append(file, str);

};


