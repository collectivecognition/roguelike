var config = require('../config.js');

var express = require('express');
var io = require('socket.io')(3001);

var app = express();

app.use(express.static('build'));

var server = app.listen(config.port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});