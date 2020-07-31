require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const http = require('http')
const cors = require('cors')

/**
 * server configuration
 */
const config = require('./config')
const { DatabaseService } = require('./services')

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV

/**
 * express application
 */
const app = express()
const server = http.Server(app)
const DB = DatabaseService(environment, config.migrate).start()

// Express routes

// const companyRouter = require('./api/routes/CompanyRouter')

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors())

// secure express app
app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false,
  }),
)

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

server.listen(config.port, () => {
  if (
    environment !== 'production' &&
    environment !== 'development' &&
    environment !== 'testing'
  ) {
    console.error(
      `NODE_ENV is set to ${environment}, but only production and development are valid.`,
    )
    process.exit(1)
  }
  console.log(
    `Server is runing in ${environment} mode on port ${config.port}`,
  )
  return DB
})
