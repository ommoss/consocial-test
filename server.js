require('dotenv').config();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const pg = require('pg');
var configPg = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER, //env var: PGUSER
  database: process.env.DATABASE_DATABASE, //env var: PGDATABASE
  password: process.env.DATABASE_PASSWORD, //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
const pool = new pg.Pool(configPg);
function postTournamentData(req, res){

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

    res.json({test: result.rows});

    });
  });
}



function inputTournamentData(req,res){
  console.log(req)
  // pool.connect(err, client, done) {
    // if(err){
    //   return console.error('error fetching client form pool', err);
    // }
    // client.query('INSERT INTO tournament (title, body, author_id, game_id, max, current, location, time, date) VALUES ("Namersz", "googd tournament", 1000, 2000, 10, 8, "950 Rockland Ave, Victoria"', function(err, result){
    //   done();

    //   if(err){
    //     return console.error('error running query', err);
    //   }
    // })
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
    app.get('/tournament', function(req, res){
      inputTournamentData(req, res);
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

