module.exports = {
  bgColor: '',
  bgBlack: function() {
    this.bgSet('black')
    return this
  },
  bgBlue: function() {
    this.bgSet('blue')
    return this
  },
  bgCyan: function() {
    this.bgSet('cyan')
    return this
  },
  bgGreen: function() {
    this.bgSet('green')
    return this
  },
  bgMagneta: function() {
    this.bgSet('magneta')
    return this
  },
  bgRed: function() {
    this.bgSet('red')
    return this
  },
  bgWhite: function() {
    this.bgSet('white')
    return this 
  },
  bgYellow: function(){
    this.bgSet('yellow')
    return this
  },
  bgSet: function(string) {
    this.bgColor = this.pallete.bg[string]
  },
}
