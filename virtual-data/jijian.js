#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["基建信息表"];
var file = '基建信息表.txt';

module.exports = function(){
  
  //fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));
var str="";
    for(var i = 0; i < 10; i++){
      var line = [];
      line.push("ND-XSJL-0K1-"+(i+100));
      line.push((i+10)+"号楼建设项目");
      line.push(parseInt(Math.random() * 40000, 10));
      line.push(parseInt(Math.random() * 1000, 10));
      line.push(['在建','已完工'][parseInt(Math.random() * 2, 10)]);
      line.push(['2010', '2011', '2012', '2013', '2014', '2015', '2016'][parseInt(Math.random() * 7, 10)]+'-'+['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][parseInt(Math.random() * 12, 10)]);
      line.push(parseInt(Math.random() * 1000000, 10));
      line.push(parseInt(Math.random() * 1000000, 10));
      line.push(['学生宿舍','教师宿舍','食堂','体育馆'][parseInt(Math.random() * 4, 10)]);
    
      str += line.join(',')+'\n';
    }

  fw.append(file, str);
};


