#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["学生信息表"];
var names = require('./names')["姓名"];
var pcity = require('./province');
var file = '学生信息表.txt';

module.exports = function(){
  
  //fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));

  global.student = {};
  for(var i = 0; i < 413; i++){
    var line = [];
    line.push(20171318000 + i); //学号
    line.push(names[i]);   //姓名
    line.push(['男','女'][parseInt(Math.random() * 2, 10)]);
    line.push([17,18,19,20,21,22,23,24][parseInt(Math.random() * 8, 10)]);
    
    var city = pcity[parseInt(Math.random() * 251, 10)];
    line.push(city[0]);
    line.push(city[1]);
    
    var zy = require('./yuan')();
    line.push(zy[0]);
    line.push(zy[1]);
    
    line.push(['大一','大二','大三','大四'][parseInt(Math.random() * 4, 10)]);
    line.push('本科');
    line.push([13900000000,15200000000,18600000000,13800000000,18200000000][parseInt(Math.random() * 5, 10)]+parseInt(Math.random() * 10000000, 10));

    fw.append(file, line.join(','));
    
    global.student[line[0]] = line;
  }

};


