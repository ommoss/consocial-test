
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.integer('uid')
            table.string('username');
            table.string('password');
            table.string('first_name');
            table.string('last_name');
            table.string('email');
            table.timestamps();
        }),
        knex.schema.createTable('games', function(table){
            table.integer('gid')
            table.string('name');
            table.string('description');
            table.timestamps();
        }),

        knex.schema.createTable('tournament', function(table){
            table.increments('id');
            table.string('title');
            table.string('body');
            table.string('game');
            // table.boolean('private');
            // table.integer('author_id')
            //      .references('uid')
            //      .inTable('users');
            // table.integer('game_id')
            //       .references('gid')
            //       .inTable('games');
            table.integer('max');
            table.integer('current');
            table.string('location');
            table.string('time');
            table.string('date');
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
