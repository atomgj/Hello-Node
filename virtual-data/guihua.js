#!/usr/local/bin/node
var fw = require('./file')(require('fs'));
var header = require('./header')["学科规划表"];
var file = '学科规划表.txt';

var km = require('./km');
var yx = require('./yx');

var kas = require('./kas')();

module.exports = function(){
  
  //fw.unlink(file);
  fw.write(file);

  fw.append(file, header.join(','));
var str = "";
  for(var j = 0; j < kas.length; j++){
    var line = [];
    line.push(kas[j]);
    line.push(['必修','选修'][parseInt(Math.random() * 2, 10)]);
    var ys = [150,200,50,100][parseInt(Math.random() * 4, 10)];
    line.push(ys);
    line.push(ys-(parseInt(Math.random() * 20, 10)));
    line.push([20,24,12,15][parseInt(Math.random() * 4, 10)]);
    
    str += line.join(',')+'\n';
  }
  fw.append(file, str);

};


