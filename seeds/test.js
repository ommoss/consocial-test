
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users', 'tournament','games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          uid: 1000,
          username: 'bob',
          password: 'bob',
          first_name: 'bob',
          last_name: 'billy',
          email: 'bob@example.com'
        }),
        knex('users').insert({
          uid: 2000,
          username: 'bill',
          password: 'science',
          first_name: 'bill',
          last_name: 'nye',
          email: 'scienceguy@example.com'
        }),
        knex('users').insert({
          uid: 3000,
          username: 'ross',
          password: 'paint',
          first_name: 'Bob',
          last_name: 'Ross',
          email: 'paints@example.com'
        }),
        knex('games').insert({
          gid: 6000,
          name: 'Super Smash Bros',
          description: 'Beat your friends'
        }),
        knex('tournament').insert({
          title: 'Beat Down',
          body: 'beat your friends up!',
          private: false,
          // author_id: 1000,
          // game_id: 6000,
          max: 20,
          current: 5,
          location: '2320 Victor St, Victoria',
          time: '4:00',
          date: 'Nov 31st'
        }),
          knex('tournament').insert({
          title: 'Death Party',
          body: 'Drink when you die',
          // author_id: 2000,
          // game_id: 6000,
          max: 10,
          current: 8,
          location: '223 Edenbridge Dr, Toronto',
          time: '8:00',
          date: 'Dec 5th'
        }),
          knex('tournament').insert({
          title: 'ath Party',
          body: 'You die',
          private: false,
          // author_id: 2000,
          // game_id: 6000,
          max: 10,
          current: 8,
          location: '223 Goverment St, Victoria',
          time: '9:00',
          date: 'Dec 5th'
        }),
          knex('tournament').insert({
          title: 'HEARTS',
          body: '1234 Pandora St, Victoria',
          private: false,
          // author_id: 1000,
          // game_id: 6000,
          max: 10,
          current: 8,
          location: '777 Government St',
          time: '11:00',
          date: 'Dec 11th'
        })
      ]);
    });
};
