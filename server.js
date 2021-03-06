const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/docs'));

app.listen(port);
console.log('Server on: '+ port);