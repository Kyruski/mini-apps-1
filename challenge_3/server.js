const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(port);