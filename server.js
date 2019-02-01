// const app = require('./app');
// const http = require('http');

// http.createServer(app).listen(process.env.PORT);


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log("access")
  res.send('Hello World!');
});

app.listen(80, '0.0.0.0', function () {
  console.log('Example app listening on port 3000!');
});