const l = require('./index.js')

l('test value').log()

l('test1').lvl1().red().date().log()


const error = l().pipe('lvl1', 'red', 'date', 'log')

error('test2')
