var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var store = require('../models/index.js')
var bcrypt = require('bcryptjs')
var logic = require('../lib/logic.js')


console.log('Listening on :8080');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
