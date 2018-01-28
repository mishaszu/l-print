const lPrint = {
  value: '',
  color: '',
  init: function(string) {
    this.value = string
    return this
  },
  pad: function(pad) {
    if (pad) {
      this.value = this.value.padStart(pad)
    } else {
      this.value = this.value.padStart(10)
    }
    return this
  },
  log: function() {
    console.log(this.value)
  }
}


function printer(string) {
  const loger = Object.create(lPrint)
  return loger.init(string)
}

const l = printer

l('test').pad(5).log()

//module.exports = printer
