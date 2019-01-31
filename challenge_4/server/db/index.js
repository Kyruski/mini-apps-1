const mysql = require('mysql');

const dbConnection = mysql.createConnection(
  {
    host: "localhost",
    user: 'root',
    database: 'connectFour'
  }
);
dbConnection.connect();

module.exports = dbConnection;