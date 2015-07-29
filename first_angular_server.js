var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("./madlib_whatev"));
app.listen(5000);