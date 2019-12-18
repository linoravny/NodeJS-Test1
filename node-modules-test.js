const path = require('path'); // for file names and directories

var pathObj = path.parse(__filename);
console.log(`path; ES6 - Total Memory  ${pathObj}`);

////////////////////////////////////////
const os = require('os'); // for operation system

var totalMemory = os.totalmem();
console.log(`os; ES6 - Total Memory  ${totalMemory}`);

////////////////////////////////////////
const fs = require('fs'); // for file system

fs.readdir('./', function(err,files){
    if(err) console.log('fs; ERROR:', err); //for err write '$' insted './' on path
    else console.log('fs;' + files);
}); //list of file in directory

////////////////////////////////////////

