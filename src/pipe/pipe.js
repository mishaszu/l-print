"strict mode"

module.exports = {
  pipe: function() {
    const args = arguments
    return string => {
      const obj = Object.create(this)
      obj.init(string)
      Array.prototype.slice.call(args).forEach(arg => {
        obj[arg]()
      })
    }
  }
}
