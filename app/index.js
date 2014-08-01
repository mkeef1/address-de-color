'use strict';


var port = process.env.PORT;
var db = process.env.DB;

var express = require('express');
var app = express();

var config = require('./lib/config');
config(app);

var config = require('./lib/pipeline');
config(app, express);

var config = require('./lib/mongodb');
config(db);


app.listen(port, function(){
  console.log('Express is ready on PORT', port);
});
