const fs = require('fs'); 
const path = require('path');

let extension = '.' + process.argv[3]; 

fs.readdir(process.argv[2], (err, files) => {
    if (err) throw err; 
    files
        .filter(file => path.extname(file) === extension)
        .forEach(value => console.log(value));
});