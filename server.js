http = require('http');

	var messages = [{
		msg: 'You are awesome',
		timestamp: new Date()
	}];

var onRequest = function (req, res){

	if (req.method === 'GET') {
		// set headers here, look at the example from Tuesday.
		res.end(JSON.stringify(messages))
	}


};


http.createServer(onRequest).listen(3000);
