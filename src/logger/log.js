"strict mode"

module.exports = {
  log: function() {
    let descriptiveText = ''
    if (this.descriptiveText) {
      descriptiveText = `${this.descriptiveTextBrackets[0]}${this.descriptiveText}${this.descriptiveTextBrackets[1]}`
    }
    if (!this.value) {
      this.value = ''
    }

    if (this.color || this.bgColor || this.effect) {
      console.log(
        `${this.color}${this.bgColor}${this.effect}`,
        `${this.dateString}${descriptiveText}`,
        this.value,
        this.pallete.reset
      )
    } else {
      console.log(
        this.pallete.reset,
        `${this.dateString}${descriptiveText}`,
        this.value
      )
    }
  }
}
