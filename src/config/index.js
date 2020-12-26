const ENV = process.env

const config = {
  migrate: false,
  port: ENV.PORT || 3300,
  redisURL: ENV.REDIS_URL,
}

module.exports = config
