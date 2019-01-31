const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('client/dist'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port);