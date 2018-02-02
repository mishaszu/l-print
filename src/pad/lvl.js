"strict mode"

module.exports = {
  lvl1: function(string){
    if (string) {
      this.value = this.value.padStart(10, string)
    } else {
      this.value = this.value.padStart(10)
    }
    return this
  },
  lvl2: function(string){
    if (string) {
      this.value = this.value.padStart(20, string)
    } else {
      this.value = this.value.padStart(20)
    }
    return this
  },
  lvl3: function(string){
    if (string) {
      this.value = this.value.padStart(30, string)
    } else {
      this.value = this.value.padStart(30)
    }
    return this
  },
  lvl4: function(string){
    if (string) {
      this.value = this.value.padStart(40, string)
    } else {
      this.value = this.value.padStart(40)
    }
    return this
  },
}
