const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

app.use(cors())
app.use(bodyParser.json())

require('./server/api/board')(app);
require('./server/api/member')(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});