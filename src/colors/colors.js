"strict mode"

module.exports = {
  color: '',
  black: function() {
    this.colorSet('black')
    return this
  },
  blue: function() {
    this.colorSet('blue')
    return this
  },
  cyan: function() {
    this.colorSet('cyan')
    return this
  },
  green: function() {
    this.colorSet('green')
    return this
  },
  magneta: function() {
    this.colorSet('magneta')
    return this
  },
  red: function() {
    this.colorSet('red')
    return this
  },
  white: function() {
    this.colorSet('white')
    return this
  },
  yellow: function() {
    this.colorSet('yellow')
    return this
  },
  colorSet: function(string) {
    this.color = this.pallete.colors[string]
  },
}
