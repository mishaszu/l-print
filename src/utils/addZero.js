"strict mode"

module.exports = {
  addZero: function(number) {
    if (number > 9) {
      return number
    }
    return `0${number}`
  }
}
