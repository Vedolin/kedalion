var express = require('express');
var r = require('rethinkdb');

var app = express();
var appPort = 3000;

app.get('/', function (req, res) {
     res.send('Hello Device!');
});

app.get('/device_sensores_package', function (req, res) {
    var connect_db = r.connect({
        host: 'localhost',
        port: 28015,
        db: 'device_sensores_db',
    })
    
    // r.db("device_sensores_db").table("device_sensores_package")
     res.send('Hello Device!');
});

app.listen(appPort, function () {
    console.log('Were are live, listening on port 3000!');
});
