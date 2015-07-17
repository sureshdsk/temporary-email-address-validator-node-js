var express = require('express');
var bodyParser = require('body-parser');
var disposableEmail = require('disposable-emails');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){

  var html = '<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="email" name="EmailAddress" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Check</button>' +
            '</form>';
               
  res.send(html);
});

app.post('/', function(req, res){
  var EmailAddress = req.body.EmailAddress;
  var result = disposableEmail.validate(EmailAddress);
  var html = 'Email: ' + EmailAddress + '. '+result+'<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});

app.listen(3000);