var express = require('express');
var app = express();

app.route('/')
	.get(function(req, res) {
	res.sendFile(__dirname + '/build/views/index.html');
})
	.post(function(req, res) {
	res.send('This was a post request');
})
	.put(function(req, res){
	console.log(req.params);
	res.send('This was a put, ' + req.query.batida);
});
 
app.listen(3000);