
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('uid').primary();
            table.string('username');
            table.string('password');
            table.string('first_name');
            table.string('last_name');
            table.string('email');
            table.timestamps();
        }),
        knex.schema.createTable('games', function(table){
            table.increments('gid').primary();
            table.string('name');
            table.string('description');
            table.timestamps();
        }),

        knex.schema.createTable('tournament', function(table){
            table.increments('id').primary();
            table.string('title');
            table.string('body');
            table.integer('author_id')
                 .references('uid')
                 .inTable('users');
            table.integer('game_id')
                  .references('gid')
                  .inTable('games');
            table.timestamps();
        })
    ])

};

exports.down = function(knex, Promise) {
     return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('games'),
        knex.schema.dropTable('tournament')
    ])

};
