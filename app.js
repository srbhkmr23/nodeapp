
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// var session = require('express-session')
// var cookieParser = require('cookie-parser');




// app.use(session({secret: 'ssshhhhh'}));
// app.use(cookieParser());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function (req, res) {

res.end("Hello node server");
})

var server_port=process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address=process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


var server = app.listen(server_port,server_ip_address,function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("node server is running");
})

