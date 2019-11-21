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


if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  
  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  
})}


app.listen(port);
console.log('Running app at localhost: ' + port);
