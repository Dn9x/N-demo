var server = require('./server.js');
var route = require('./route.js');
var handles = require('./handlers.js');

var handle = {};
handle["/"] = handles.start;
handle["/start"] = handles.start;
handle["/upload"] = handles.upload;

server.start(route.route, handle);