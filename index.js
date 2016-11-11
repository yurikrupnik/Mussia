var http = require('http');

function handleRequest(req, res) {
    res.end('heloo');
}
var server = http.createServer(handleRequest);
server.listen(4000, function () {
  console.log('lissening on ');

});