const development = {
  database: process.env.DEVELOP_DB_NAME,
  username: process.env.DEVELOP_DB_USER,
  password: process.env.DEVELOP_DB_PASS,
  host: process.env.DEVELOP_DB_HOST,
  dialect: 'postgres',
}

const staging = {
  database: process.env.STAGING_DB_NAME,
  username: process.env.STAGING_DB_USER,
  password: process.env.STAGING_DB_PASS,
  host: process.env.STAGING_DB_HOST,
  dialect: 'postgres',
}

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
}

module.exports = {
  development,
  staging,
  production,
}
