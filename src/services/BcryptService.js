const bcrypt = require('bcrypt')

const BcryptService = () => {
  const saltRounds = process.env.SALT_ROUNDS || 10

  const hash = (plain) => {
    const salt = bcrypt.genSaltSync(saltRounds)
    return bcrypt.hashSync(plain, salt)
  }

  const compare = (plain, encrypted) =>
    bcrypt.compareSync(plain, encrypted)

  return { hash, compare }
}

module.exports = BcryptService()
