// Setting up config

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/foundationdb',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/development',
    },
  },

  production: {
    client: 'pg',
    connection: 'postgres://localhost/foundationdb',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production',
    },
  },
};
