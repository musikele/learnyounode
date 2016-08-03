const fs = require('fs');

let file;

fs.readFile(process.argv[2], (err, data) => {

	if (err) throw err;
	file = data.toString();

	//array
	let lines = file.toString().split('\n');

	// se un file ha 0 \n avrà una riga; se ne ha 1, avrà 2 righe... 
	// insomma bisogna togliere 1 al numero di righe
	console.log(lines.length - 1);
});