module.exports = {
  lvl1: function(string){
    if (string) {
      this.value = this.value.padStart(5, string)
    } else {
      this.value = this.value.padStart(5)
    }
    return this
  },
  lvl2: function(string){
    if (string) {
      this.value = this.value.padStart(10, string)
    } else {
      this.value = this.value.padStart(10)
    }
    return this
  },
  lvl3: function(string){
    if (string) {
      this.value = this.value.padStart(15, string)
    } else {
      this.value = this.value.padStart(15)
    }
    return this
  },
  lvl4: function(string){
    if (string) {
      this.value = this.value.padStart(20, string)
    } else {
      this.value = this.value.padStart(20)
    }
    return this
  },
}
