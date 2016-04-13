var express = require('express');
var r = require('rethinkdb');

var app = express();
var appPort = 3000;

app.get('/', function (req, res) {
     res.send('Hello Device!');
});

app.listen(appPort, function () {
    console.log('Were are live, listening on port 3000!');
});
