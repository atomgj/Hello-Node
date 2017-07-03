var wc = require('./wc.js');
var fw = require('./file')(require('fs'));
var file = 'wc.txt';
fw.write(file);

var rows = wc;
var str = "";
for(i=0;i<rows.length;i++){
    var line = rows[i];
    var arr = line.split(",");
    if(parseInt(arr[5])){
      str +=line+"\n";
    }
}
fw.append(file, str);