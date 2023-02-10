//Establish backend libraries
var express = require("express");
var app = express();

//Allow use of external files
app.use(express.static(__dirname + '/public2/'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

//Run the code from a local server
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});