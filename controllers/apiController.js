
var bodyParser = require('body-parser');
var ref =require('../firebase/firebase');

var jsonParser = bodyParser.json();

module.exports = function(app) {
	
	app.get('/api/person/:id', function(req, res,next) {
	// get that data from database
		res.json({ firstname: 'John', lastname: 'Doe' });
	});

	app.post('/api/person',jsonParser, function(req, res,next) {
		res.send('Thank you for the JSON data!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
		ref.once("value", function(snapshot) {
		  console.log(snapshot.val());
		});

	});

	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});

}
