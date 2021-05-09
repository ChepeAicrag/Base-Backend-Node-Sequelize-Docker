module.exports = {
  PORT: process.env.PORT,
  SEED: process.env.SEED_V,
  HOST_AWS: process.env.HOST_AWS,
  CADUCIDAD_TOKEN: process.env.CADUCIDAD_TOKEN,
  DB: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: Boolean(process.env.DB_LOGGING),
  },
};