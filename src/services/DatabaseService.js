const database = require('../config/Database')

const DatabaseService = () => {
  const allowedConfigs = ['development', 'staging', 'production']
  const serverConfig = process.env.SERVER_CONFIG || 'production'

  const authenticateDB = () => database.authenticate()

  const errorDBStart = (err) => {
    console.info('unable to connect to the database:', err)
    process.exit(0)
  }

  const wrongEnvironment = () => {
    console.warn(
      `only development, staging and production are valid SERVER_CONFIG variables but ${serverConfig} is specified`,
    )
    return process.exit(1)
  }

  const start = async () => {
    try {
      if (!allowedConfigs.includes(serverConfig)) {
        await wrongEnvironment()
      }
      await authenticateDB()
    } catch (err) {
      errorDBStart(err)
    }
  }

  return {
    start,
  }
}

module.exports = DatabaseService()
