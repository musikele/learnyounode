const bl = require('bl');
const http = require('http');

const async = require('async');

let args = process.argv.slice(2, process.argv.length);


async.map(args, (url, callback) => {
	http.get(url, (res) => {
		res.pipe(bl((err, data) => {
			if (err)
				return callback(err);

			callback(null, data.toString());
		}));
	});
}, (err, results) => {
	results.forEach((result) => console.log(result));
});