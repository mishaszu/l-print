"strict mode"

const addZero = require('./addZero')
const padStart = require('./padStart')

const utils = Object.assign(
  {},
  addZero,
  padStart
)

module.exports = utils
