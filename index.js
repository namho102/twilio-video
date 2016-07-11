var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/local', function(req, res) {
  res.sendFile(__dirname + '/local.html');
});

app.get('/remote', function(req, res) {
  res.sendFile(__dirname + '/remote.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
