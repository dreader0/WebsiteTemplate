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

app.use(express.static(path.join(__dirname, 'client/build')));

var mysql = require('mysql');
let username = "macsquiggles";
let password = "Password@1";

let sql_host = "us-cdbr-iron-east-02.cleardb.net";
let sql_database = "heroku_852fe942c3b73d3";
let sql_password = "6459330d";
let sql_user = "ba3c2c9bf3031d";
let email_password = "mquigley01";   
var nodemailer = require('nodemailer');

var db_config = {
  host: sql_host,
    user: sql_user,
    password: sql_password,
    database: sql_database
};


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mquigleyautoreply@gmail.com',
    pass: email_password
  }
});

app.post('/api/v1/SendEmail', function(req, res) {

  var mailOptions = {
    from: 'mquigleyautoreply@gmail.com',
    to: 'mackenziequigley@outlook.com',
    subject: "Contact Form Filled By: " + req.body.firstname + " " + req.body.lastname,
    text: "Hi Mackenzie!\n" + req.body.firstname + " " + req.body.lastname + " (" + req.body.email + 
    ") sent you the following message:\n\n" + req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send("{\"Error\":\"" + error + "\"}");
    } else {
      console.log('Email sent: ' + info.response);
      res.send("{\"Error\":\"None\"}");
    }
  });
});

const pool = mysql.createPool({
  host: sql_host,
  user: sql_user,
  database: sql_database,
  password: sql_password
});


//Create the file table if it doesn't already exist
app.get('/api/v1/createPostTable', function(req, res) {
  pool.query("CREATE TABLE IF NOT EXISTS POSTS (post_id INT AUTO_INCREMENT PRIMARY KEY, post_title VARCHAR(60) NOT NULL, post_description TEXT NOT NULL, posted_date VARCHAR(60) NOT NULL)", function (err, result) {
    if(err) {
      res.send("{\"error\":\"" + err + "\"}");
    }
    else {
      console.log("Created post table");
      res.send("{\"error\":\"Created\"}");
    }
  });
});


//Returns the number of events in the database
app.post('/api/v1/getPosts', function(req, res) {
  let order = "ASC";

  if(req.body.order !== undefined) {
    order = req.body.order;
  }

  var sql = "SELECT * FROM POSTS ORDER BY posted_date " + order + ";";
  pool.query(sql, function (err, result) {
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

  pool.query(sql, function (err, result) {
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


if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  
  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  
})}


app.listen(port);
console.log('Running app at localhost: ' + port);
