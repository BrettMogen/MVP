var express = require('express');
var app = express();
var router = require('./router.js');

var PORT = 3000;

app.use('/', express.static(__dirname + '/../../front-end/distribution'));
app.use(express.json());

app.use('/workout', router);

app.listen(PORT, () => {
  console.log(`I'm listening on port: ${PORT}`);
});