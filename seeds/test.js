
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users', 'tournament','games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          username: 'bob',
          password: 'bob',
          first_name: 'bob',
          last_name: 'billy',
          email: 'bob@example.com'
        }),
        knex('users').insert({
          username: 'bill',
          password: 'science',
          first_name: 'bill',
          last_name: 'nye',
          email: 'scienceguy@example.com'
        }),
        knex('users').insert({
          username: 'ross',
          password: 'paint',
          first_name: 'Bob',
          last_name: 'Ross',
          email: 'paints@example.com'
        }),
        knex('games').insert({
          name: 'Super Smash Bros',
          description: 'Beat your friends'
        }),
        knex('tournament').insert({
          title: 'BeatDown',
          body: 'Hit em Hard',
          author_id: 1,
          game_id: 1,
        })
      ]);
    });
};
