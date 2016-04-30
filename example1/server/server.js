var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');
var morgan = require('morgan');

var lionRouter = require('./lions');
var tigerRouter = require('./tigers');

app.use(morgan('dev'));
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/lions',lionRouter);
app.use('/tigers',tigerRouter);

app.use(function(err, req, res, next){
	if(err){
		console.log(err.message);
		res.status(500).send(err);
	}
});

var port = 3000;

app.listen(port,function(){
	console.log('listening on http://localhost:',port);
});