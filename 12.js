const http = require('http');
const map = require('through2-map');

let server = http.createServer((req, res) => {
	
	if (req.method != 'POST') 
		return res.end('send me a POST \n');
	
	res.writeHead(200, {'content-type' : 'text/plain'});
	req.pipe(map(chunk => {
		return chunk.toString().toUpperCase();
	}))
	.pipe(res);
});

server.listen(process.argv[2]);

