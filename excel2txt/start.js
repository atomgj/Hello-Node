
var fs = require('fs');

var file;

file = 'excel/委内瑞拉地区的中心点经纬度-20170116.txt';


fs.writeFile('委内瑞拉测试数据.csv', '', function(err){
  
})

fs.readFile(file,'utf-8',function(err,data){  

  var arr = data.split('\n');
  console.log(arr.length);
  
  
  
  var i;
  var c1="",c2="",c3="";
  for(i=0;i<arr.length;i++){
     var line = arr[i].split(',');
     var str;
     if(line[0]){
       c1 = line[0];
     }
     if(line[1]){
       c2 = line[1];
     }
     if(line[2]){
       c3 = line[2];
     }
     line[0] = c1;
     line[1] = c2;
     line[2] = c3;
     line[6] = parseInt(Math.random()*100000,10);
     
     str = line.join(',');
     fs.appendFile('委内瑞拉测试数据.csv', str, function(err){
       
     })
  
  }
  
}); 