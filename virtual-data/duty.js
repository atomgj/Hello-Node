#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["教师排班表"];
var names = require('./names')["教师"];
var pcity = require('./province');
var file = '教师排班表.txt';

module.exports = function(){
  
  //fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));

  require('./kecheng');
  var teacher = global.teacher;
  var i, kas;
  var str = "";
  var km = require('./km');
  var yx = require('./yx');
  
  kas = require('./kas')();
  console.log(teacher);
  for(i in teacher){
    var line = [];
    line.push(teacher[i][0]);   //工号
    line.push(teacher[i][1]);   //姓名
    line.push(teacher[i][8]);   //学科
    var wk = [1,2,3][parseInt(Math.random() * 3, 10)] * 4
    line.push(wk);  
    line.push(wk-[0,parseInt(Math.random() * 3, 10)][parseInt(Math.random() * 2, 10)]);  
    var yk = [10,12,15][parseInt(Math.random() * 3, 10)]*20
    line.push(yk);  
    line.push(yk-[0,parseInt(Math.random() * 5, 10)][parseInt(Math.random() * 2, 10)]);  
    line.push(['大一','大二','大三','大四','研一','研二','研三'][parseInt(Math.random() * 7, 10)]);
    str += line.join(',')+'\n';
    global.teacher[line[0]] = line;
  }
  fw.append(file, str);
};


