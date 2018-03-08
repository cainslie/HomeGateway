'use strict';
var express = require('express');
var routes = require('./routes');
var http = require('http');
var port = process.env.PORT || 80;
var app = express();

app.set('port', process.env.PORT || 80);

app.get('/', routes.index);
app.get('/createnewdevice/:deviceID/:devicename/:outputPin/:outputMode/:outputDuration', routes.newDevice);
app.get('/getAllDevices', routes.getAllDevices);
app.get('/getdevicebyID/:deviceID', routes.getDeviceByID);
app.get('/getdevicebyName/:deviceName', routes.getDeviceByName);
app.get('/getnextdeviceid', routes.getNextDeviceID);

app.get('/log/:deviceID/:logMessage', routes.logMessage);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});