// Update with your config settings.
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "mysql",
    version: "8.0.23",
    connection: {
      host: "localhost",
      user: "root",
      password: "",
      database: "graphql",
    },
    pool: {
      min: 2,
      max: 60,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./seeds",
    },
    ...knexSnakeCaseMappers,
  },

  staging: {
    client: "mysql",
    connection: {
      host: "graphql-database.cmhumxllkvkp.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "admin",
      password: "adminadmin",
      database: "grapql-database",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    ...knexSnakeCaseMappers,
  },

  production: {
    client: "mysql",
    connection: {
      host: "graphql-database.cmhumxllkvkp.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "admin",
      password: "adminadmin",
      database: "grapql-database",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    ...knexSnakeCaseMappers,
  },
};
