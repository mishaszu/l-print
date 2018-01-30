const {colors, pallete} = require('./src/colors')
const {pad, lvl} = require('./src/pad')
const {date} = require('./src/date')
const {log} = require('./src/logger')
const {pipe} = require('./src/pipe')


//***application core***//
const core = {
  value: '',
  init: function(string) {
    this.value = string
    return this
  }
}

//***l-print object***//
const print = Object.assign({}, core, colors, pallete, pad, lvl, date, log, pipe)


//***l-print function***//
function _l(string) {
  const logger = Object.create(print)
  return logger.init(string)
}


module.exports = _l
