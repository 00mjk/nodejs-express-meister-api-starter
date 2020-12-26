const Redis = require('ioredis')
const config = require('../config')

const CacheService = () => {
  const redisClient = new Redis(config.redisURL)

  const setObject = async (key, object) => {
    try {
      await redisClient.set(key, JSON.stringify(object))
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const getObject = async (key) => {
    try {
      const object = await redisClient.get(key)
      if (object) return Promise.resolve(JSON.parse(object))
      return Promise.resolve(null)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return { setObject, getObject, redisClient }
}

module.exports = CacheService()
