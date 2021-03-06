const fs = require('fs');
const path = require('path');

module.exports = function (directoryName, fileExtension, callback) {
    
    let filteredList = [];
    fs.readdir(directoryName, (err, files) => {
        if (err) {
            return callback(err); //note the callback syntax!
        }
        files.forEach(file => {
            let ext = path.extname(file).substr(1);
            if (ext === fileExtension) {
                filteredList.push(file);
            }
        });
        callback(null, filteredList); //first argument (err) is null 
    });
};