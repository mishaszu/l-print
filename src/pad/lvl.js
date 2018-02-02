"strict mode"

const {utils} = require('../utils')

module.exports = {
  lvl0: function(string){
    this.value = utils.padStart(this.value, 0, string)
    return this
  },
  lvl1: function(string){
    this.value = utils.padStart(this.value, 4, string)
    return this
  },
  lvl2: function(string){
    this.value = utils.padStart(this.value, 8, string)
    return this
  },
  lvl3: function(string){
    this.value = utils.padStart(this.value, 12, string)
    return this
  },
  lvl4: function(string){
    this.value = utils.padStart(this.value, 16, string)
    return this
  },
}
