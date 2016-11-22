require('dotenv').config({silent: true});

var env = process.env.ENV || 'development';
var config = require('../knexfile')[env];

module.exports = require('knex')(config);