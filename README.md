# Temporary Email Address Validator Node.js
As a owner or web master you wouldn’t really want someone anonymously utilizing your website or campaign benefits. So You really want to prevent using temporary email addresses on website. So this Node Module was created in an attempt to make a collection of disposable email addresses and validate signups against with the list of temporary email providers.

Install the node package : <code>npm i temporary-email-address-validator</code>

# Example
`
var express = require('express');
var bodyParser = require('body-parser');
var disposableEmail = require('temporary-email-address-validator');

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
  var result = disposableEmail.validate(EmailAddress), result_text ="OK";
  if (!result){
    result_text = "Alert!!";
  }
  var html = 'Email: ' + EmailAddress + ': '+result_text+'<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});

app.listen(3000);
`

Run with node app.js