var express = require('express');
var app = express();

app.get('/:par', function (req, res) {
  console.log(req.params)

  res.send('Hello World!');
});

app.get('/create', function (req, res) {
    res.send('create');
});
  

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});