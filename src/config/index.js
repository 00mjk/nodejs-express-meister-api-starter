const { NODE_ENV } = process.env
const ENV = process.env

const config = {
  migrate: false,
  port: NODE_ENV === 'production' ? ENV.SERVER_PORT : 4200,
}

module.exports = config
