#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["学生信息表"];
var names = require('./names')["学生"];
var pcity = require('./province');
var file = '学生信息表.txt';

module.exports = function(){
  
  //fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));

  global.student = {};
  var str = "";
  for(var i = 0; i < 400; i++){
    
    
    var year = parseInt(Math.random() * 2, 10);
    var ruxue = ['2007','2008','2009','2010','2011','2012'][year];
    
    var line = [];
    line.push(parseInt(ruxue+"0000000",10)+1318000 + i); //学号
    line.push(names[i]);   //姓名
    line.push(['男','女'][parseInt(Math.random() * 2, 10)]);
    line.push([17,18,19,20,21,22,23,24][parseInt(Math.random() * 8, 10)]);
    
    var city = pcity[parseInt(Math.random() * 251, 10)];
    line.push(city[0]);
    line.push(city[1]);
    
    var zy = require('./yuan')();
    line.push(zy[0]);
    line.push(zy[1]);
    
    var xueli = parseInt(Math.random() * 7, 10);
    line.push(['大一','大二','大三','大四','研一','研二','研三'][xueli]);
    
    var xl;
    if(xueli<=3){
      xl = 0;
    }else{
      xl = 1;
    }
    
    line.push(['本科','研究生'][xl]);
    line.push([13900000000,15200000000,18600000000,13800000000,18200000000][parseInt(Math.random() * 5, 10)]+parseInt(Math.random() * 10000000, 10));
    
    var biye = "";
    
    if(xueli<=3){
      biye = parseInt(ruxue, 10) + 4;
    }else{
      biye = parseInt(ruxue, 10) + 3;
    }
    line.push(ruxue); 
    line.push(biye);
    str += line.join(',')+'\n';
    global.student[line[0]] = line;
  }
  
  fw.append(file, str);
};


