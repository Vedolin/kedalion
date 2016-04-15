var express = require("express"),
        r = require("rethinkdb"),
        bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
     res.send({"msg": "Hello Device!"});
});

app.post("/device_sensors_package", function (req, res) {
    var dataPackage = req.body;

    r.connect({
        host: "localhost",
        port: 28015,
        db: "device_sensores_db",
        authKey: ""
    })
    .then(function(conn) {
        return r.db("device_sensors_db")
                    .table("device_sensors_package")
                    .insert(dataPackage)
                    .run(conn)
                    .finally(function() {
                        conn.close();
                    });
    }).then(function(output) {
        console.log(output);
        res.status(201).send({"result": "Success"});
    }).error(function(err) {
        console.log("Failed: ", err);
    });
});

app.listen(port, function () {
    console.log('Were are live, listening on port 3000!');
});
