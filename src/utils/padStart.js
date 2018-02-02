"strict mode"

module.exports = {
  padStart: function(string, number, pattern) {
    let padString = '',
      defaultPattern = ' '
    for(let x = 0; x < number; x++) {
      padString = pattern ? `${padString}${pattern}` : `${padString}${defaultPattern}`
    }

    return `${padString}${string}`
  }
}
