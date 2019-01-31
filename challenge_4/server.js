const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const model = require('./server/model/index.js');
const port = 3000;

app.use(express.static('client/dist'));
app.use(express.static('public'));
app.use(express.static('client/images'));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  console.log('this is req.body', req.body);
  model.post(req.body, (err, data) => {
    if (err) {
      res.end('post unsuccessful, error in the model callback' + err);
    } else {
      res.end('post was successful');
    }
  })
});

app.post('/retrieve', (req, res) => {
  model.grabGames(req.body, (err, data) => {
    if (err) {
      res.end('unable to make request to db ' + err);
    } else {
      let player1Score = 0;
      let player2Score = 0;
      for (let item of data) {
        (item.winner === req.body.player1) ? player1Score++ : player2Score++;
      }
      res.json({player1score: player1Score, player2Score: player2Score});
    }
  })
})

app.listen(port);