var http = require('http');

var outcome = function(res){
	res.setEncoding('utf8');
	var result = "";
	res.on('data', function(chunk){
		result += chunk; 
	});

	res.on('end',function(){
		console.log(result);
	})
};

var options = {
	hostname:'localhost',
	port:8080,
	method:'GET',
	path:'/a.txt'
}

var req = http.request(options,outcome);
req.end();
