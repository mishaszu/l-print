module.exports = {
  pad: function(pad, string) {
    if (string) {
      if (pad) {
        this.value = this.value.padStart(pad, string)
      } else {
        this.value = this.value.padStart(10, string)
      }
    } else {
      if (pad) {
        this.value = this.value.padStart(pad)
      } else {
        this.value = this.value.padStart(10)
      }
    }
    return this
  },
}
