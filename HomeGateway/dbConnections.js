var Datastore = require('nedb');

db = {};
db.devices = new Datastore({ filename: 'devices.db', autoload: true });
db.syslog = new Datastore({ filename: 'syslog.db', autoload: true });