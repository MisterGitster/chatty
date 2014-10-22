http = require('http');

	var messages = [{
		msg: 'You are awesome',
		timestamp: new Date()
	}];

var onRequest = function (req, res){

	if (req.method === 'GET') {
		res.end(messages.stringify())
	}


};


http.createServer(onRequest).listen(3000);