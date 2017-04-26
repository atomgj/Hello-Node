#!/usr/local/bin/node

module.exports = function(fw, data, mtd){
  var file = '教师排班表.txt';
  var header = data["表头"]["教师排班表"];
  fw.write(file);
  fw.append(file, header.join(','));
  var teacher = global.teacher;
  var i;
  var str = "";
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


