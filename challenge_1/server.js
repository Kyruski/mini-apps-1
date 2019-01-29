const express = require('express');
const app = express();
const cors = require('cors');
const parser = require('body-parser');
const storage = { player1: 0, player2: 0};

app.use(cors());
app.use(parser.json());

app.get('/', (req, res) => {
  res.json(storage);
});

app.post('/', (req, res) => {
  storage[req.body.winner]++;
  res.json(storage);
})

app.listen(3000, () => console.log('Listening on port 3000'));