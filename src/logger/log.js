module.exports = {
  log: function() {
    if (!this.value) {
      this.value = ''
    }
    if (this.color || this.bgColor) {
      console.log(
        `${this.color}${this.bgColor}`,
        this.dateString,
        this.value,
        this.pallete.reset
      )
    } else {
      console.log(
        this.pallete.reset,
        this.dateString,
        this.value
      )
    }
  }
}
