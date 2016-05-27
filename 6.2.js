//note that we start with "./"" !!!
// extension (.js) is optional
const filteredLs = require('./6.1.js');

filteredLs(process.argv[2], process.argv[3], (err, files) => {
    console.log(files.join('\n'));
});

