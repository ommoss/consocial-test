
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          username: 'bob',
          password: 'bob',
          first_name: 'bob',
          last_name: 'billy',
          email: 'bob@example.com'
        }),
        knex('users').insert({
          id: 2,
          username: 'bill',
          password: 'scien',
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
      ]);
    });
};
