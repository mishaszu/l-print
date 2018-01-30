module.exports = {
  dateString: '',
  date: function(){
    const s = {}
    const now = new Date()
    s.hour = now.getHours()
    s.minutes = now.getMinutes()
    s.seconds = now.getSeconds()
    this.dateString = `[${s.hour}:${s.minutes}:${s.seconds}]`
    return this
  }
}
