import { DB } from './keys';
const fs = require('fs');

module.exports = {
  development: {
    username: DB.username,
    password: DB.password,
    database: DB.database,
    host: DB.host,
    port: DB.port,
    dialect: DB.dialect,
    logging: DB.logging,
  },
  test: {
    username: DB.username,
    password: DB.password,
    database: DB.database,
    host: DB.host,
    port: DB.port,
    dialect: DB.dialect,
    logging: DB.logging,

  },
  production: {
    username: DB.username,
    password: DB.password,
    database: DB.database,
    host: DB.host,
    port: DB.port,
    dialect: DB.dialect,
    logging: DB.logging,
  },
};
