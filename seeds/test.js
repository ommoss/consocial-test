
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users', 'tournament','games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          uid: 1,
          username: 'bob',
          password: 'bob',
          first_name: 'bob',
          last_name: 'billy',
          email: 'bob@example.com'
        }),
        knex('users').insert({
          uid: 2,
          username: 'bill',
          password: 'science',
          first_name: 'bill',
          last_name: 'nye',
          email: 'scienceguy@example.com'
        }),
        knex('users').insert({
          uid: 3,
          username: 'ross',
          password: 'paint',
          first_name: 'Bob',
          last_name: 'Ross',
          email: 'paints@example.com'
        }),
        knex('games').insert({
          gid: 1,
          name: 'Super Smash Bros',
          description: 'Beat your friends'
        }),
        knex('tournament').insert({
          id: 1,
          title: 'Beat Down',
          body: 'beat your friends up!',
          private: false
          author_id: 1,
          game_id: 1,
          max: 20,
          current: 5,
          location: 'Garricks Head Pub',
          time: '4:00',
          date: 'Nov 31st'
        }),
          knex('tournament').insert({
          id: 2,
          title: 'Death Party',
          body: 'Drink when you die',
          private: false
          author_id: 2,
          game_id: 1,
          max: 10,
          current: 8,
          location: 'Loones and Tunes',
          time: '8:00',
          date: 'Dec 5th'
        })
      ]);
    });
};
