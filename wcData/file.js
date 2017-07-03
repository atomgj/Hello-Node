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
  return fw;
}