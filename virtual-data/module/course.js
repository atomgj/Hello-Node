#!/usr/local/bin/node
module.exports = function(fw, data, mtd){
  var file = '学生课程表.txt';
  var header = data["表头"]["学生课程表"];
  fw.write(file);
  fw.append(file, header.join(','));
  var student = global.student;
  var str = "";
  for(i in student){
    var kc = mtd._getKeChengByZhuanye(student[i][7]);
    for(var j = 0; j < kc.length; j++){
      if(kc[j]){
        var line = [];
        line.push(i);
        line.push(student[i][1]);
        line.push(kc[j]);
        var qz = parseInt(Math.random() * 100, 10);
        var qm = parseInt(Math.random() * 100, 10);
        line.push(qz<60?60:qz);
        line.push(qm<60?60:qm);
        if(student[i][1]){
          str += line.join(',')+'\n';
        }
      }
    }
  } 
  
  fw.append(file, str);

};


