var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: ''
});
export default connection;