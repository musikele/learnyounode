const fs = require('fs'); 
const path = require('path');

let extension = '.' + process.argv[3]; 

fs.readdir(process.argv[2], (err, files) => {
    if (err) throw err; 
    files.forEach(value => path.extname(value) === extension ? console.log(value) : null);
});