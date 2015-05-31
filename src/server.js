var path = require('path');
var compress = require('compression');

var express = require('express');
var app = express();

app.use(compress()); 

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
