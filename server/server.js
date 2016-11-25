var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');
var express = require('express');
const pg = require('pg');
const SocketServer = require('ws').Server;
const connectionString = process.env.DATABASE_URL || 'postgres://vagrant:vagrant@localhost:5432/test';
const client = new pg.Client(connectionString);
const results = []

function postTournamentData(){
  client.connect();
  const query = client.query('SELECT * FROM tournament;');
  query.on('row', (row) => {
      results.push(row);
    });
  query.on('end', () => {

    console.log('postTournamentData');
    client.end(); });
}

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
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

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});


