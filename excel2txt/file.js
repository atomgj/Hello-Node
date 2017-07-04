module.exports = function(fs){
  var fw = {};

  fw.write = function(fileName){
    fs.writeFile(fileName, '', function(err){
    	if(err){
        throw err;
      }
    })
  };
  fw.append = function(fileName, line){
    fs.appendFile(fileName, line+'\n', function(err){
      if(err){
        throw err;
      }
    });
  };
  fw.unlink = function(fileName){
      fs.unlink(fileName, function(err){
        if(err){
          throw err;
        }
        
      });
  };
  fw.close = function(fileName){
      fs.close(fileName, function(err){
        if(err){
            throw err;
        }
      });
  };
  
  fw.read = function(fileName){
     fs.readFile(fileName,'utf-8',function(err,data){  
      if(err){  
          console.log(err);  
      }else{  
          console.log(data);  
      }  
    });  
  }
  return fw;
}