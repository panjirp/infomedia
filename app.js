var express = require('express');
var router = express.Router();
var app = express();
var api_request = require('./api/index');

app.use('/img',express.static('img'));
app.use('/request', api_request);

app.get('/', function (req, res) {
   res.send('Infomedia');
});

app.get('*', function(req, res){
   var respOutput ={
      'responseCode' 	: 404,
      'responseMessage' : "no route found"
  }
   res.status(404).json(respOutput);
});


var server = app.listen(8081, function () {
   var port = server.address().port
   
   console.log("Infomedia Running at", port)
})