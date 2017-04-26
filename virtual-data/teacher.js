#!/usr/local/bin/node

module.exports = function(fw, data, mtd){
  var file = '教师信息表.txt';
  var header = data["表头"]["教师信息表"];
  var names = data["姓名"]["教师"];
  var pcity = data["省市"];
  fw.write(file);
  fw.append(file, header.join(','));
  global.teacher = {};
  
  var i, kas = mtd._getAllKeCheng();
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
    var yxk = mtd._getYuanZhuanYeByKecheng(kas[i]);
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


