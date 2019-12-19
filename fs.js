const fs = require('fs');
const { promisify } = require('util');

const readFilePromise = promisify(fs.readFile);

readFilePromise('./data1.txt').then((data) => {
    console.log(data.toString());
}).catch((err) => { 
    console.log('err: ' + err);
})