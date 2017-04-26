#!/usr/local/bin/node

module.exports = function(fw, data, mtd){
  
  var file = '学生一卡通.txt';
  var header = data["表头"]["学生一卡通"];
  fw.write(file);
  fw.append(file, header.join(','));
  var student = global.student;
  for(i in student){
    
    var time = parseInt(Math.random() * 20, 10);
    for(var j = 0; j < time; j++){
      var line = [];
      line.push(i);
      line.push(student[i][1]);
      line.push(parseInt(Math.random() * 500, 10));
      line.push([0,parseInt(Math.random() * 1000, 10)][parseInt(Math.random() * 2, 10)]);
      line.push(parseInt(Math.random() * 100, 10));
      line.push(['食堂','超市','水果店','书店','网吧'][parseInt(Math.random() * 5, 10)]);
      
      var loan = [0,parseInt(Math.random() * 5, 10)][parseInt(Math.random() * 2, 10)];
      line.push(loan);
      line.push(loan > 0 ? parseInt(Math.random() * 1000, 10) : 0);
      fw.append(file, line.join(','));
    }
  }
};


