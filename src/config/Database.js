const Sequelize = require('sequelize')

const connection = require('./Connection')

let database

switch (process.env.SERVER_CONFIG) {
  case 'production':
    database = new Sequelize(
      connection.production.database,
      connection.production.username,
      connection.production.password,
      {
        host: connection.production.host,
        dialect: connection.production.dialect,
        define: {
          timestamps: false,
        },
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        logging: false,
      },
    )
    break
  case 'staging':
    database = new Sequelize(
      connection.staging.database,
      connection.staging.username,
      connection.staging.password,
      {
        host: connection.staging.host,
        dialect: connection.staging.dialect,
        define: {
          timestamps: false,
        },
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        logging: false,
      },
    )
    break
  default:
    database = new Sequelize(
      connection.development.database,
      connection.development.username,
      connection.development.password,
      {
        host: connection.development.host,
        dialect: connection.development.dialect,
        define: {
          timestamps: false,
        },
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        logging: false,
      },
    )
}

module.exports = database
