"strict mode"

const {utils} = require('../utils')

module.exports = {
  pad: function(pad, string) {
    if (pad) {
      this.value = utils.padStart(this.value, pad, string)
    } else {
      this.value = utils.padStart(this.value, 5, string)
    }
    //if (string) {
    //  if (pad) {
    //    this.value = this.value.padStart(pad, string)
    //  } else {
    //    this.value = this.value.padStart(10, string)
    //  }
    //} else {
    //  if (pad) {
    //    this.value = this.value.padStart(pad)
    //  } else {
    //    this.value = this.value.padStart(10)
    //  }
    //}
    return this
  },
}
