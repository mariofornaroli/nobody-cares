const express = require('express');
const app = express();
const config = require('config');
const { MongoClient } = require('mongodb');

app.locals.isDbConnected = true;

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = config.mongo.url;
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

 // routing
 const routerApp = require('./app/routes')(app);
 routerApp.listen(config.port, () => {
     console.info('Nobodycares sentence started on port ' + config.port)
 });