const http = require('http'); 
const fs = require('fs'); 

const server = http.createServer((request, response) => {
	response.writeHead(200, {'content-type' : 'text/plain'});
	let file = fs.createReadStream(process.argv[3],{encoding: 'utf8'});
	file.pipe(response);
});

server.listen(process.argv[2]);