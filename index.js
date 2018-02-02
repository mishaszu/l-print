const {colors, bg, pallete, effects} = require('./src/colors')
const {pad, lvl} = require('./src/pad')
const {date} = require('./src/date')
const {log} = require('./src/logger')
const {pipe} = require('./src/pipe')
const {text} = require('./src/text')


//***application core***//
const core = {
  value: '',
  init: function(string) {
    this.value = string
    return this
  }
}

//***l-print object***//
const print = Object.assign(
  {},
  core,
  colors, bg, pallete, effects,
  pad, lvl,
  date,
  log,
  pipe,
  text
)


//***l-print function***//
function _l(string) {
  const logger = Object.create(print)
  return logger.init(string)
}


module.exports = _l
