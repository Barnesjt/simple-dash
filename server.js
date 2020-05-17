const express = require('express');
const app = express();
const port = 3000;
var morgan = require('morgan');
var path = require('path');

app.disable('etag');
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('simple-dash listening on port: ' + port));