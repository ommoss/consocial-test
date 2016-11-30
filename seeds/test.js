
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
          //private: false,
          // author_id: 1000,
          // game_id: 6000,
          game: 'Super Smash Bros',
          max: 20,
          current: 5,
          location: '2320 Victor St, Victoria',
          time: '4:00',
          date: 'Nov 31st'
        }),
          knex('tournament').insert({
          title: 'Chinatown Mortal Kombat Death Party',
          body: 'Come over for a great Mortal Kombat Party.',
          game: 'Mortal Kombat',
          //private: false,
          // author_id: 2000,
          // game_id: 6000,
          max: 10,
          current: 8,
          location: '524 Fisgard Ave, Victoria',
          time: '8:00',
          date: 'Dec 5th'
        }),
          knex('tournament').insert({
          title: 'Mario Party Gathering',
          body: 'You die',
          //private: false,
          // author_id: 2000,
          // game_id: 6000,
          game: 'Mario Party',
          max: 10,
          current: 8,
          location: '223 Goverment St, Victoria',
          time: '9:00',
          date: 'Dec 5th'
        }),
          knex('tournament').insert({
          title: 'HEARTS for Mario',
          body: '1234 Pandora St, Victoria',
          //private: false,
          // author_id: 1000,
          // game_id: 6000,
          game: 'MarioKart64',
          max: 10,
          current: 8,
          location: '777 Government St, Victoria',
          time: '11:00',
          date: 'Dec 11th'
        }),
          knex('tournament').insert({
          title: 'The Mariokart battle for all',
          body: 'This will be for all the marbles, bring your own beer and its going to be great',
          //private: false,
          // author_id: 1000,
          // game_id: 6000,
          game: 'MarioKart64',

          max: 10,
          current: 8,
          location: '950 Rockland Ave, Victoria',
          time: '11:00',
          date: 'Dec 11th'
        }),
            knex('tournament').insert({
          title: 'NHL 94 Superbattle',
          body: 'Come to my place for an NHL 94 tournament. NO SNACKS PROVIDED. BRING SNACKS. $20 entry fee winner takes all',
          //private: false,
          // author_id: 1000,
          // game_id: 6000,
          game: 'NHL 94',
          max: 10,
          current: 8,
          location: '1524 Begbie Ave, Victoria',
          time: '18:00',
          date: 'Dec 18th'
        })
      ]);
    });
};
