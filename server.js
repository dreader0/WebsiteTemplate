/**
* Name: Mackenzie Quigley
* Student ID: 1001753
* Email: mquigl01@uoguelph.ca
* Course: CIS*2750
* Date: 04/05/2019
* Description: the server side javascript file
**/

'use strict'

const express = require("express");
const app     = express();
const path = require('path');
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: false }));

if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  
  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  
})}


app.use(express.static(path.join(__dirname, 'client/build')));

var mysql = require('mysql');
let username = "macsquiggles";
let password = "Password@1";

let sql_host = "us-cdbr-iron-east-02.cleardb.net";
let sql_database = "heroku_bff79995f8f7255";
let sql_password = "7c439eea";
let sql_user = "b9dd0342fcf1ea";

var con = mysql.createConnection({
  host: sql_host,
  database: sql_database,
  user: sql_user,
  password: sql_password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


//Create the file table if it doesn't already exist
app.get('/api/v1/createPostTable', function(req, res) {
  con.query("CREATE TABLE IF NOT EXISTS POSTS (post_id INT AUTO_INCREMENT PRIMARY KEY, post_title VARCHAR(60) NOT NULL, post_description TEXT NOT NULL, posted_date VARCHAR(60) NOT NULL)", function (err, result) {
    if(err) {
      res.send("{\"error\":\"" + err + "\"}");
    }
    else {
      res.send("{\"error\":\"Created\"}");
    }
  });
});


//Returns the number of events in the database
app.get('/api/v1/getPosts', function(req, res) {
  var sql = "SELECT * FROM POSTS ORDER BY posted_date DESC;";
  con.query(sql, function (err, result) {
    if(err) {
      res.send("{\"error\":\"" + err + "\"}");
    }
    else {
      res.send(result);
    }
  });
});


//Returns the number of events in the database
app.post('/api/v1/addPost', function(req, res) {
  var sql = "INSERT INTO POSTS (post_title, post_description, posted_date) VALUES (\"" + req.body.title + 
  "\", \"" + req.body.description + "\", \"" +  req.body.date + "\");";

  con.query(sql, function (err, result) {
    if(err) {
      res.send("{\"error\":\"" + err + "\"}");
    }
    else {
      res.send("{\"error\":\"Success\"}");
    }
  });
});


//Returns the number of events in the database
app.post('/api/v1/checkUser', function(req, res) {
  if(req.body.username === username && req.body.password === password) {
    res.send("{\"error\":\"Verified\"}");
  }
  else {
    res.send("{\"error\":\"Error\"}");
  }
});


app.listen(port);
console.log('Running app at localhost: ' + port);
