var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var lions = [];
var id = 0;

app.get('/lions', function(req, res){
	res.json(lions);
});

app.get('/lions/:id', function(req, res){
	var lion = _.find(lions,{id:req.params.id});
	res.json(lion || {});
});

app.post('/lions', function(req, res){
	var lion = req.body;
	id++;
	lion.id= id + '';
	lions.push(lion);
	res.json(lion);
});

var port = 3000;

app.listen(port,function(){
	console.log('listening on http://localhost:',port);
});