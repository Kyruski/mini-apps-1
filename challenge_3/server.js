const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const model = require('../challenge_3/model/index.js')
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  model.post(req.body, (err, data) => {
    console.log('success, ', data, ' success')
    res.send('successful entry made');
  })
});

app.listen(port);