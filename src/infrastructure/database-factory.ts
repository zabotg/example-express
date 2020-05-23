import mysql from "mysql";

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'root',
  password : 'zabotAdmin!',
  database : 'testedb'
});

export default connection;