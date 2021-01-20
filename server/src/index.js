import express from "express";
var mysql = require('mysql');
import connection from './connection'

connection.connect();
const app = express();
const PORT=3002;

app.listen(PORT, () => {
    console.log(`Begin listening on port:${PORT}`);
});

app.get('/users', (req, res) => {
    const query = "SELECT * FROM users";
    connection.query(query, function (err, result, fields) {
        if (err) throw err
        res.send(JSON.stringify(result));
    });

});
app.get('/user/:email', function (req, res, next) {
    let query=`SELECT * FROM users where email=?`;

    console.log(JSON.stringify(req.params));
        connection.query(query, req.params.email, function (err, result, fields) {
        if (err) throw err
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    });
  });
  
app.get('/user/:id:email', (req, res, next) => {
    console.log(JSON.stringify(req.params));
    res.send(JSON.stringify(req.param));
});

app.post('/user:index', (req, res) => {
    console.log(`post to /user port ${PORT}`);
});

app.post('/users/:first_name/:last_name/:email/:username', (req, res) => {
    let sql = `INSERT INTO users(first_name, last_name, email, username) VALUES( ?, ?, ?, ?)`;
    let p = req.params;
    // console.log(p);
    let params = [req.params.first_name, p.last_name, p.email, p.username];
    connection.query(sql, [p.first_name,p.last_name,p.email,p.username], (error, results, fields) => {
      if (error){
        return console.error(error.message);
        res.end();
      }  
      console.log('Added Row(s) from Users:', results.affectedRows);
      res.end();
    });
});

app.delete('/user/:id', (req, res) => {
    let sql = `DELETE FROM users WHERE users.id = ?`;
    connection.query(sql, Number(req.params.id), (error, results, fields) => {
      if (error)
        return console.error(error.message);
        
      console.log('Deleted Row(s) from Users:', results.affectedRows);
      res.end();
    });
});