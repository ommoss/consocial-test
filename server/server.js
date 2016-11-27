var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://vagrant:vagrant@localhost:5432/test';
const client = new pg.Client(connectionString);

function postTournamentData(req, res){
  client.connect();
  let query = client.query('SELECT * FROM tournament;');

  query.on('end', (result) => {
    console.log('postTournamentData');
    console.log(result.rows)
    res.json({test: result.row});
    client.end();
  });
}
function postUsers(req, res){
  client.connect();
  let query = client.query('SELECT * FROM users;');

  query.on('end', (result) => {
    console.log('postTournamentData');
    console.log(result.rows)
    res.json({test: result.rows});
    client.end();
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

