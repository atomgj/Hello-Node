#!/usr/local/bin/node

module.exports = function(fw, data, mtd){
  var file = '学生出勤表.txt';
  var header = data["表头"]["学生出勤表"];
  fw.write(file);
  fw.append(file, header.join(','));
  var student = global.student;
  var kas = mtd._getAllKeCheng();
  var str = "";
  for(i in student){
    var idx = parseInt(Math.random() * 10, 10);
    var line = [];
    line.push(i);
    line.push(student[i][1]);
    line.push(kas[idx]);
    var cq = [10,12,15,20][parseInt(Math.random() * 4, 10)];
    line.push(cq);
    line.push(cq - ([0, parseInt(Math.random() * 4, 10)][parseInt(Math.random() * 2, 10)]));
    
    line.push(['2011', '2012'][parseInt(Math.random() * 2, 10)]+'-'+['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][parseInt(Math.random() * 12, 10)]);
    if(student[i][1]){
      str += line.join(',')+'\n';
    }
  }
  fw.append(file, str);
};


