const db = require('../db/index.js');

module.exports = {
  post: (body, callback) => {
    db.query('INSERT INTO games (player1, player2, winner) VALUES (?,?,?);', [body.player1, body.player2, body.winner], (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  grabGames: (body, callback) => {
    db.query('SELECT winner FROM games WHERE (player1 = ? AND player2 = ?) OR (player1 = ? AND player2 = ?)', [body.player1, body.player2, body.player2, body.player1], (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }

    })
  }
}