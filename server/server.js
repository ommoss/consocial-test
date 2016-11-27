require('dotenv').config();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');
const pg = require('pg');
var configPg = {
  user: process.env.DATABASE_USER, //env var: PGUSER
  database: process.env.DATABASE_DATABASE, //env var: PGDATABASE
  password: process.env.DATABASE_PASSWORD, //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
const pool = new pg.Pool(configPg);

function postTournamentData(req, res){
  let tournaments = [];
   pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * From tournament', function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows);
      tournaments.push(result.rows);
    res.json({test: tournaments});
    });
  });
}
function postUsers(req, res){
  let users = [];
  pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM users', function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows);
      //output: 1
      users.push(result.rows);
      res.json({test: users});
    });
  });
}

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
     setup: function(app) {
    // Here you can access the Express app object and add your own custom middleware to it.
    // For example, to define custom handlers for some paths:
    // app.get('/some/path', function(req, res) {
    //   res.json({ custom: 'response' });
    // });
    app.get('/tournaments', function(req, res){
      postTournamentData(req, res);
    })
    app.get('/users', function(req, res){
      postUsers(req, res);
    })
  },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  })
  .listen(process.env.PORT || 5000, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Running at http://0.0.0.0:5000');
});

