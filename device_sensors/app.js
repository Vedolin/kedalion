var express = require('express');
var r = require('rethinkdb');

var app = express();

app.get('/', function (req, res) {
     res.send('Hello Device!');
});

app.get('/device_sensores_package', function (req, res) {
    r.connect({
        host: 'localhost',
        port: 28015,
        db: 'device_sensores_db',
        authKey: ''
    })
    .then(function(conn) {
        return r.db("device_sensores_db")
                    .table("device_sensores_package")
                    .insert({
                        acceleration: {
                            x: 1.11000,
                            y: 1.221111,
                            z: 1.1111221
                        }, location: {
                            point: r.point(-122.423246, 37.779388),
                            timestamp: '14/04/2016'
                        }
                    })
                    .run(conn)
                    .finally(function() {
                        conn.close();
                    });
    }).then(function(output) {
        console.log(output);
    }).error(function(err) {
        console.log("Failed: ", err);
    });
     res.send('OK!');
});

app.listen(3000, function () {
    console.log('Were are live, listening on port 3000!');
});
