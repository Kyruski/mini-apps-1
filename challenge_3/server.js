const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.use(static('client'));
app.use(bodyParser.json());

app.listen(port);