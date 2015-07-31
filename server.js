var connect = require('connect'),
    serveStatic = require('serve-static');
var port = 5000;
var app = connect();
console.log('Waiting on localhost at port ' + port);
app.use(serveStatic("./"));
app.listen(port);