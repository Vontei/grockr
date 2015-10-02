var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var store = require('../models/index.js')
var bcrypt = require('bcryptjs')
var unirest = require('unirest');
var eyes = require('eyes')
var xml2js = require('xml2js');
var parser = new xml2js.Parser();


router.get('/yahoo', function(req, res, next) {
    var answer = { people:
      [
      {name: 'hi', age: '25'},
      {name: 'nick', age: '27'}
    ]
    };
    res.json(answer)
});


router.post('/yahoo', function(req,res,next){
  var query = req.body.search;
  var req = unirest.get('http://www.enclout.com/api/v1/yahoo_finance/show.json?auth_token=' + process.env.KEY + '&text=' + query)
    .header("X-Mashape-Key", process.env.KEY3)
    .header("Accept", "application/json")
    .end(function (result) {
    console.log(result.body);
    res.json(result.body);
})
})

router.get('/tradier', function(req,res,next){
  res.render('market')
})

router.post('/tradier', function(req,res,next){
  var query = req.body.search;
    // var req = unirest.get("https://sandbox.tradier.com/v1/markets/events")
    var req = unirest.get("https://sandbox.tradier.com/v1/markets/quotes?symbols=" + query)
      .header("Authorization", process.env.KEY2)
      .header("X-Mashape-Key", process.env.KEY3)
      .header("Accept", "text/plain")
      .end(function (result) {
        parser.on('end', function(result) {
          eyes.inspect(result);
          // console.log(result.quotes.quote)
          res.render('market', {res: result.quotes.quote[0]})
        });
        var response = parser.parseString(result.body)
      });
});





module.exports = router;
