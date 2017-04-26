#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["教师信息表"];
var names = require('./names')["教师"];
var pcity = require('./province');
var file = '教师信息表.txt';

module.exports = function(){
  
  //fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));

  require('./kecheng');
  global.teacher = {};
  var i, kas;
  
  var km = require('./km');
  var yx = require('./yx');
  
  kas = require('./kas')();
  var str = "";
  for(i = 0; i < 38; i++){
    var line = [];
    line.push(2010000 + i); //学号
    line.push(names[i]);   //姓名
    line.push(['男','女'][parseInt(Math.random() * 2, 10)]);
    line.push([30,35,36,40,45,46,50,55,60][parseInt(Math.random() * 9, 10)]);
    
    var city = pcity[parseInt(Math.random() * 251, 10)];
    line.push(city[0]);
    line.push(city[1]);
    var yxk = require('./method')(km, yx, kas[i]);
    line.push(yxk[0]);
    line.push(yxk[1]);
    line.push(yxk[2]);
    
    var idx = parseInt(Math.random() * 3, 10);
    line.push(['讲师','副教授','教授'][idx]);
    line.push(['本科','研究生','博士生'][idx]);
    
    line.push([0,1,4,5,6,10][idx*2]);
    line.push([13900000000,15200000000,18600000000,13800000000,18200000000][parseInt(Math.random() * 5, 10)]+parseInt(Math.random() * 10000000, 10));

    str += line.join(',')+'\n';
    global.teacher[line[0]] = line;
  }
  
  fw.append(file, str);
};


