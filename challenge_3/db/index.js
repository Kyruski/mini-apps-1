const mysql = require('mysql');

const dbConnect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'shoppingCheckout'
});
dbConnect.connect()
module.exports = dbConnect;