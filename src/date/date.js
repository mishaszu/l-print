"strict mode"

const {utils} = require('../utils')

module.exports = {
  dateString: '',
  date: function(){
    const s = {}
    const now = new Date()
    s.hour = utils.addZero(now.getHours())
    s.minutes = utils.addZero(now.getMinutes())
    s.seconds = utils.addZero(now.getSeconds())
    this.dateString = `[${s.hour}:${s.minutes}:${s.seconds}]`
    return this
  }
}
