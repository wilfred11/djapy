var fs = require('fs');
var path = require('path');

function deleteFolderFiles(dirPath) {
  if (fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory()) {
      fs.readdirSync(dirPath).forEach(function(file, index){
      var curPath = dirPath + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        fs.readdirSync(curPath).forEach(function(file1, index1){
            var curPath1 = curPath + "/" + file1;
            var nameNoExt = path.parse(file1).name;
            var testValue = nameNoExt.substr(nameNoExt.length-4, 4);
            if (fs.lstatSync(curPath1).isFile() && testValue==='-gen') {
             fs.unlinkSync(curPath1);
            }
        });
      }
   });
  }
}

console.log("Cleaning generated template files...");

deleteFolderFiles("./templates/gen/basic");
deleteFolderFiles("./templates/gen/dt");

console.log("Successfully cleaned generated template files.");