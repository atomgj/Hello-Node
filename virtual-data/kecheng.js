module.exports = function(key){
  var kecheng = {
      '英语专业' : ['基础英语','高级英语','英语语音'],
      '德语专业' : ['基础德语',,'德语听力','德语泛读','德语写作','德汉互译','德语口译'],
      '日语专业' : ['基础日语','高级日语','日语语音','日语语法','日语写作','日本文学'],
      '西班牙语专业' : ['基础西班牙语','高级西班牙语','西班牙语文学','西班牙互译','西班牙口译'],
      '电子工程专业' : ['大学物理','高等数学','电路原理','机械制图','汇编语言与接口技术'],
      '微电子与光电子学专业' : ['模拟电子技术','数字电子技术','C语言原理','计算机硬件技术'],
      '信息电子学专业' : ['单片机原理','电力电子技术','操作系统及原理','工程数学'],
      '通信工程专业' : ['复变函数','大学英语','通信原理','自动化原理','离散计算机控制技术']
  };
  
  return kecheng[key];

}