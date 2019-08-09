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

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: false }));


const portNum = 5000;
var mysql = require('mysql');
let username = "macsquiggles";
let password = "Password@1";

var con = mysql.createConnection({
  host: "localhost",
  database: "website",
  user: "root",
  password: "password"
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


app.listen(portNum);
console.log('Running app at localhost: ' + portNum);
