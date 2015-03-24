var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all('/', function(req, res) { 
res.send(req.body.title + req.body.text); 
}); 
app.listen(3000); 