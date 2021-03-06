var fw = require('./common/file')(require('fs'));
var data = require('./data/static');
var mtd = require('./common/factory')(data);
require('./module/student')(fw, data, mtd);
require('./module/course')(fw, data, mtd);
require('./module/teacher')(fw, data, mtd);
require('./module/internet')(fw, data, mtd);
require('./module/concat')(fw, data, mtd);
require('./module/onecard')(fw, data, mtd);
require('./module/club')(fw, data, mtd);
require('./module/guihua')(fw, data, mtd);
require('./module/jijian')(fw, data, mtd);
require('./module/chuqin')(fw, data, mtd);
require('./module/duty')(fw, data, mtd);
console.log('done');