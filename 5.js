import fs from 'fs'; 

fs.readdir(process.argv[2], (err, files) => {
   if (err) throw err; 
    
});