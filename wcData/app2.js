// var m11 = require('./11.js');
// var m23 = require('./23.js')
// var m456 = require('./456.js')
// var fw = require('./file')(require('fs'));
// 
// var rows = m11.concat(m23).concat(m456);

var m11 = require('./s123.js');
var m23 = require('./s456.js')
var rows = m11.concat(m23);
var fw = require('./file')(require('fs'));


var i;

var file = '传感器监测用水量.txt';
fw.write(file);


var obj = {};
for(i=0;i<rows.length;i++){
  var key = rows[i];
  if(!obj[key]){
    obj[key] = 1;
  }
}

var qc = [];
for(i in obj){
  if(obj.hasOwnProperty(i)){
    qc.push(i);
  }
}

var map = {};
for(i=0;i<qc.length;i++){
   var line = rows[i];
   var arr = line.split(",");
   var key  = "";
   if(arr[2]!='null'){
      key  = arr[0]+new Date(arr[1]).getTime();
      map[key] = arr[2];
   }
}

function getPrev(name, key){
  var d = key - 60*60*1000;
  return map[name+d] || 0;
}
 
 
var str = "";
for(i=0;i<qc.length;i++){
   var line = rows[i];
   
   var arr = line.split(",");
   if(arr[2]!='null' && arr[2]!='-1'){
     var pr = getPrev(arr[0], new Date(arr[1]).getTime());
     var diff = 0;
     if(pr){
        diff = parseFloat(arr[2]) - parseFloat(pr);
        str += arr[0]+","+arr[1]+","+arr[2]+","+diff+"\n";
     }
     
   }
}

fw.append(file, str);
