const database = require('../config/Database')

const DatabaseService = (environment) => {
  const authenticateDB = () => database.authenticate()

  const errorDBStart = (err) =>
    console.info('unable to connect to the database:', err)

  const wrongEnvironment = () => {
    console.warn(
      `only development, staging, test and production are valid NODE_ENV variables but ${environment} is specified`,
    )
    return process.exit(1)
  }

  const startDev = async () => {
    try {
      await authenticateDB()
    } catch (err) {
      errorDBStart(err)
    }
  }

  const startTest = async () => {
    try {
      await authenticateDB()
    } catch (err) {
      errorDBStart(err)
    }
  }

  const startProd = async () => {
    try {
      await authenticateDB()
    } catch (err) {
      errorDBStart(err)
    }
  }

  const start = async () => {
    switch (environment) {
      case 'development':
        await startDev()
        break
      case 'testing':
        await startTest()
        break
      case 'production':
        await startProd()
        break
      default:
        await wrongEnvironment()
    }
  }

  return {
    start,
  }
}

module.exports = DatabaseService
