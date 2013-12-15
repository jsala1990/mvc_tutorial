
/**
 * Module dependencies.
 */

var express = require('express');
var controllers = require('./controllers');
var user = require('./controllers/user');
var http = require('http');
var path = require('path');
var config = require('./config')();
var MongoClient = require('mongodb').MongoClient;
var Admin = require('./controllers/Admin');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', controllers.index);
app.get('/users', user.list);

MongoClient.connect('mongodb://'+ config.mongo.host + ':' + config.mongo.port + '/fastdelivery', function(err, db){
	// if(err) throw err;
	if(err) {
		console.log('Sorry, there is no mongo db server running at: ' + 'mongodb://'+ config.mongo.host + ':' + config.mongo.port + '/fastdelivery');
	} else {
	var attachDB = function(req, res, next){
		req.db = db;
		next();
	};
	app.all('/admin*', attachDB, function(req, res, next) {
    Admin.run(req, res, next);
	});

	http.createServer(app).listen(config.port, function(){
		console.log('Express server listening on port ' + config.port);
	});
	}
});

