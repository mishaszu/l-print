module.exports = {
  log: function() {
    if (!this.value) {
      this.value = ''
    }
    if (this.color || this.bgColor || this.effect) {
      console.log(
        `${this.color}${this.bgColor}${this.effect}`,
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
