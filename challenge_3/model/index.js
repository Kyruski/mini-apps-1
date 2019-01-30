const db = require('../db/index.js');

module.exports = {
  post: (body, callback) => {
    console.log(body);
    db.query('INSERT INTO users (name, email, password, line1, line2, city, state, zipCode, phone, creditCard, expDate, cvv, billingZip) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);', [body.name, body.email, body.password, body.line1, body.line2, body.city, body.state, body.zipCode, body.phone, body.creditCard, body.expDate, body.cvv, body.billingZip], (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        console.log(results);
        callback(null, results);
      }
    });
  }
}