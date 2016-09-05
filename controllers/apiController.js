
var bodyParser = require('body-parser');
var fb =require('../firebase/firebase');

var jsonParser = bodyParser.json();

module.exports = function(app) {

	app.get('/api/person/:id', function(req, res,next) {
	// get that data from database
		res.json({ firstname: 'John', lastname: 'Doe' });
	});

	app.post('/api/person',jsonParser, function(req, res,next) {
		res.send('Thank you for the JSON data! firstnamev: '+req.body.firstname+' lastname : '+req.body.lastname);
		console.log(req.body.firstname);
		console.log(req.body.lastname);


	});

	app.post('/api/startProcess',jsonParser, function(req, res,next) {
		var uid;
		fb.auth().verifyIdToken(req.body.idToken).then(function(decodedToken) {

  	res.send('Thank you for the JSON data! region: '+req.body.region+' processType : '+req.body.processType+' UID: '+ decodedToken.uid);

  // ...
}).catch(function(error) {
  res.send('Erro This is yhe error: '+req.body.region+' processType : '+req.body.processType+' UID: '+ error);}
});


		console.log(req.body.firstname);
		console.log(req.body.lastname);
			console.log(req.body.idToken);
		fb.database().ref("user").once("value", function(snapshot) {
		  console.log(snapshot.val());
		});

	});

	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});

}
