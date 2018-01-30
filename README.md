# l-print
Color and format for nodejs console.log

## Multitool for loggin in nodejs

**regular logging**
```
const l = require('l-print')

l('here is test string').lvl1().red().date().log()
```

**creating predefined logging pattern**
```
const l = require('l-print')

const error = l().pipe('red', 'date', 'log')
error('print this error')
```
