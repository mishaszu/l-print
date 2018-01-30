const lPrint = {
  value: '',
  color: null,
  pallete: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magneta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
  },
  resetColor: '\x1b[0m',
  dateString: '',
  init: function(string) {
    this.value = string
    return this
  },
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
  red: function() {
    this.color = this.pallete.red
    return this
  },
  blue: function() {
    this.color = this.pallete.blue
    return this
  },
  green: function() {
    this.color = this.pallete.green
    return this
  },
  white: function() {
    this.color = this.pallete.white
    return this
  },
  date: function(){
    const s = {}
    const now = new Date()
    s.hour = now.getHours()
    s.minutes = now.getMinutes()
    s.seconds = now.getSeconds()
    this.dateString = `[${s.hour}:${s.minutes}:${s.seconds}]`
    return this
  },
  log: function() {
    if (this.color) {
      console.log(this.color, this.dateString, this.value, this.resetColor)
    } else {
      console.log(this.resetColor, `${this.dateString}${this.value}`)
    }
  },
  pipe: function() {
    const args = arguments
    return string => {
      const obj = Object.create(this)
      obj.init(string)
      Array.prototype.slice.call(args).forEach(arg => {
        obj[arg]()
      })
    }
  }
}


function printer(string) {
  const loger = Object.create(lPrint)
  return loger.init(string)
}

const l = printer

l('test1').date().lvl1('_').blue().log()
l('test2').date().lvl2('_').green().log()
l('test3').date().lvl3('.').white().log()
l('test4').date().lvl4().log()

const warning = lPrint.pipe('date', 'red', 'lvl1','log')
warning('test5a')
warning('test5b')
l('test6').date().lvl4().log()
