const fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {

    if (err) throw err; 
    
    let lines = data.toString().split('\n').length - 1;

    console.log('dentro la callback');
    console.log(lines);
});

console.log('fuori dalla callback');