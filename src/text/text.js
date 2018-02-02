"strict mode"

module.exports = {
  descriptiveText: '',
  descriptiveTextBrackets: ['<<<', '>>>'],
  text: function(string, brackets) {
    this.descriptiveText = string
    if (brackets) {
      this.descriptiveTextBrackets = brackets
    }
    return this
  }
}
