const winston = require('winston')

const LoggerService = () => {
  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.json(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.prettyPrint({ colorize: true }),
    ),
    transports: [new winston.transports.Console()],
  })

  const serverError = (error) => {
    logger.error(
      '[Server Error]',
      { tags: 'server error, code 500' },
      error,
    )
  }
  return { logger, serverError }
}

module.exports = LoggerService()
