const bl = require('bl');
const http = require('http');

const results = [];
let count = 0;

function checkCompleted(results) {
	for (let j = 0; j < 3; j++) {
		if (results[j])
			console.log(results[j]);
	}
}

for (let i = 0; i < 3; i++) {
	http.get(process.argv[i + 2], (res) => {
		res.pipe(bl((err, data) => {

			if (err)
				return console.error(err);

			results[i] = data.toString();
			count++;

			if (count == 3)
				checkCompleted(results);
		}));
	});
}