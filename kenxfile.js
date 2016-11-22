module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'test'
    },
    debug: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://iqrkjwwmwvrzxt:fDcmWQ8KQX3YRfFZ4nEYCznJiq@ec2-54-83-44-229.compute-1.amazonaws.com:5432/d676umdlbmqm4i',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

