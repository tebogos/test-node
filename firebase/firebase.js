var firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: __dirname+"/serviceAccountCredentials.json",
  databaseURL: "https://test-firebase-5d6d2.firebaseio.com"
});

var db = firebase.database();
var fb=firebase;
var ref = db.ref("user");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});
module.exports =fb;
