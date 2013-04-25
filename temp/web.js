// initialize express
var express = require('express');
var app = express(express.logger());
app.use(express.bodyParser());
app.set('title', 'nodeapp');

// initialize Mongo
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/scorecenter';
var mongo = require('mongodb');
var db = mongo.Db.connect(mongoUri, function (error, databaseConnection) {
db = databaseConnection;
});

// HOME: displays all scores
app.get('/', function(request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'X-Requested-With');

	db.collection('highscores', function(error, collection) {
		collection.find().toArray(function(error, items) {
			response.send(items);
		})
	})
});

// POST API: allows HTML5 game on web domain to send high scores
app.post('/submit.json', function(request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'X-Requested-With');

	var entry = request.body;
	db.collection('highscores', function(error, collection) {
		collection.insert(entry, function(error, result) {
			if(error) {
				console.log("Error inserting " + error);
			}
			else {
				console.log('' + result + " inserted");
				response.send(entry);
			}
		});
	})
});

// GET API: returns top ten scores for a specified game in descending order
app.get('/highscores.json', function(request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'X-Requested-With');

	var name = request.query.game_title;
	db.collection('highscores', function(error, collection) {
		collection.find({'game_title':name}).sort({'score':-1}).limit(10).toArray(function(error, items) {
			response.send(items);
		})
	})
});

// USERSEARCH: displays high scores for username input in textbox on page
app.get('/usersearch', function(request, response) {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'X-Requested-With');

	response.send('<!DOCTYPE html><head><title>User Search</title></head><body><form id="input" name="search" action="/usersearch/results" method="post">Username:<input type="text" name="username"><input type="submit" id="submit" value="Submit"></form></body></html>');
	var username = request.body.username;
});

app.post('/usersearch/results', function(request, response) {
	var user = request.body.username;

	db.collection('highscores', function(error, collection) {
		collection.find({'username':user}).toArray(function(error, items) {
			if (error) {
				response.send("User not found. Sorry!");
			}
			else {
				response.send(items);
			}
		})
	})
});

app.listen(process.env.PORT || 3000);