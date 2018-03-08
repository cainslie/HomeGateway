var dbc = require('./dbConnections');
var documents = require('./documents');

exports.index = function (req, res) {
    res.send("It works!");
};

exports.getDeviceByID = function (req, res) {
    db.devices.findOne({ deviceID: req.params.deviceID }, function (err, doc) {
        //var ID = doc.deviceName;
        res.send(doc);
    })
}

exports.getDeviceByName = function (req, res) {
    db.devices.findOne({ deviceName: req.params.deviceName }, function (err, doc) {
        //var ID = doc.deviceName;
        res.send(doc);
    })
}


exports.getNextDeviceID = function (req, res) {
    db.devices.count({}, function (err, count) {
        res.sendStatus(count+1);
    })
}

exports.newDevice = function (req, res) {
    documents.deviceDef.deviceID = req.params.deviceID;
    documents.deviceDef.deviceName = req.params.devicename;
    documents.deviceDef.outputPin = req.params.outputPin;
    documents.deviceDef.outputMode = req.params.outputMode;
    documents.deviceDef.outputDuration = req.params.outputDuration;
    db.devices.insert(documents.deviceDef);
    res.send("Device Saved");
}

exports.logMessage = function (req, res) {
    var date = new Date();
    documents.logDef.logTime = date;
    documents.logDef.deviceID = req.params.deviceID;
    documents.logDef.logMessage = req.params.logMessage;
    db.syslog.insert(documents.logDef);
    res.send("Logged");
}

exports.getAllDevices = function (req, res) {
    db.devices.find({}, function (err, doc) {
        res.send(doc);
    })
}