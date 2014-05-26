
/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser');
var compress = require('compression');
var favicon = require('static-favicon');
var http = require('http');
var path = require('path');
var routes = require('./routes');
var c = require('./config').config;  // App configuration

var app = express();
app.set('port', process.env.PORT || c.appPort);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
//app.use(favicon(__dirname + '/img/favicon.ico'));
app.use(compress());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));


/**
 * Define routes.
 */
app.get('/', routes.index);


/**
 * Fire up the server. 
 */
http.createServer(app).listen(app.get('port'), function(){
    console.log('Server started on port ' + app.get('port') + '. \nTry this: http://localhost:' + app.get('port'));
});
