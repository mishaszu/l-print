module.exports = {
  log: function() {
    if (!this.value) {
      this.value = ''
    }
    if (this.color || this.bgColor || this.effect) {
      console.log(
        `${this.color}${this.bgColor}${this.effect}`,
        `${this.dateString}${this.descriptiveTextBrackets[0]}${this.descriptiveText}${this.descriptiveTextBrackets[1]}`,
        this.value,
        this.pallete.reset
      )
    } else {
      console.log(
        this.pallete.reset,
        `${this.dateString}${this.descriptiveTextBrackets[0]}${this.descriptiveText}${this.descriptiveTextBrackets[1]}`,
        this.value
      )
    }
  }
}
