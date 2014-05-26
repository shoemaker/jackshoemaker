
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var c = require('./config').config;  // App configuration

var app = express();

// all environments
app.set('port', process.env.PORT || c.appPort);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
// app.use(express.favicon());
// app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


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
