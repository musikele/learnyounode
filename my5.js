const fs = require('fs');
const path = require('path');

//aggiungo un . all'estensione da riga di comando 
let extension = '.'+process.argv[3];

fs.readdir(process.argv[2], (err, files) => {
    
    //files è un array, ciclo sui file
    files.forEach(file => {
        
        if (path.extname(file) === extension) {
            console.log(file);
        }
    });
});