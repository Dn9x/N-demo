var http = require('http');
var url = require('url');

exports.start = function(route, handle){
	http.createServer(function(request, response){
		var path = url.parse(request.url).pathname;

		var resdf = route(handle, path, response);

		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(resdf);
		response.end();
	}).listen(8888);

	console.log('server is ok! 8888');
}
