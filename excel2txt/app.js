var xlsx = require('node-xlsx');

var fw = require('./file')(require('fs'));

var list = xlsx.parse("./excel/demo.xls");

var arr = list[0].data;
var i,j, line, str, file;

file = '表4_分行业规模以上工业主要经济指标.txt';
fw.write(file);
for(i=0;i<arr.length;i++){

    line = arr[i];
    for(j=0;j<line.length;j++){

        if(!line[j]){
            line[j] = 0;
        }

        if(line[j]){
            line[j] = line[j].toString();

            line[j] = line[j].split('\n').join('');
        }


    }
    str = line.join(',');
    fw.append(file,str);
}
