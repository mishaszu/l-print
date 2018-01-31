module.exports = {
  log: function() {
    if (!this.value) {
      this.value = ''
    }
    if (this.color) {
      console.log(this.color, this.dateString, this.value, this.pallete.reset)
    } else {
      console.log(this.pallete.reset, `${this.dateString}${this.value}`)
    }
  }
}
