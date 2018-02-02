"strict mode"

module.exports = {
  effect: '',
  blink: function() {
    this.setEffect('blink')
    return this
  },
  bright: function() {
    this.setEffect('bright')
    return this
  },
  dim: function() {
    this.setEffect('dim')
    return this
  },
  hidden: function() {
    this.setEffect('hidden')
    return this
  },
  reverse: function() {
    this.setEffect('reverse')
    return this
  },
  underscore: function() {
    this.setEffect('underscore')
    return this
  },
  setEffect: function(string) {
    this.effect = this.pallete.effects[string]
  },
}
