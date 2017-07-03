var m1 = require('./1.js');
var m2 = require('./2.js')
var m3 = require('./3.js')
var m4 = require('./4.js')
var m5 = require('./5.js')
var m6 = require('./6.js')

var fw = require('./file')(require('fs'));

var rows = m1.concat(m2).concat(m3).concat(m4).concat(m5).concat(m6);


var i;

var file = 'info1.txt';
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


var str = "";
for(i=0;i<qc.length;i++){
    var line = rows[i];
    var arr = line.split(",");
    if(parseInt(arr[5])){
      str += arr[1]+","+arr[3]+","+arr[5]+"\n";
    }
}

fw.append(file, str);
