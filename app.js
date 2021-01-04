var http = require('http');
var routes = require('./routes/index');

http.createServer(function (req, res) {
    routes.routes(req, res);    
}).listen(8080);

