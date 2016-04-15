var r = require('rehinkdb');

var connect_db = r.connect({
    host: 'localhost',
    port: 28015,
    db: 'device_sensores_db',

})
