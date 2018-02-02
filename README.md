# l-print
Color and format for nodejs console.log

## Nodejs console logger

Library purpose is to format nodejs console to make output more readable.

Examples:
```
const l = require('l-print')

l(`It's error message`).date().text('ERROR').red().log()
// [22:22:22]<<<<ERROR>>> It's error message
// printed with red font color
```


## 2 way to log

### Regular logging
```
const l = require('l-print')

l('here is test string').lvl1().red().date().log()
```

### creating logging patern
```
const l = require('l-print')

const error = l().pipe('red', 'date', 'log')
error('print this error')
```


## Doc

### **library function**
```
require('l-print')
```
*l-print* is function that return printer object
It's accept argument that represents text you want to log
```
const lPrint = require('l-print')
lPrint('Here is text to log')
```
### color
Coloring console font
Supported colors:
- blue
- black
- cyan
- green
- magneta
- red
- white
- yellow
**usage**
```
l('text').red().log()
```

### bgColor
Coloring console font background
Supported colors:
- blue
- black
- cyan
- green
- magneta
- red
- white
- yellow
**usage**
to use add 'bg' bedore color and uppercase first letter
```
l('text').bgBlue().log()
```

### effects
Applying effect on console text
Supported effects:
- bright
- dim
- underscore
**usage**
```
l('text').underscore().log()
```

### pad
Adding space or characters before logging text.
```
pad(number, string)
```
- number: number of characters to pad at start
- string: character that will be padded [optional]

**usage**
```
l('text').pad(5,'.')
//.....text
```

### lvlx
Similar to pad but with predefined padding value
```
lvlx(string)
```
- string: character that will be padded [optional]

*levels:*
- lvl0: no padding
- lvl1: 4 paddings
- lvl2: 8 paddings
- lvl3: 12 paddings
- lvl4: 16 paddings

**usage**
```
l('text').lvl2('>').log()
//########text
```

### date
Console log will be preceded with date in format:
[HH:MM:SS]
```
date()
```
**usage**
```
l('text').date().log()
//[22:22:22] text
```

### text
Add descriptive text before text and padding (but after date)
```
text(string, array)
```
- string: text to display
- array[optional]: index[0] opening characters, index[1] closing characters by default ['<<<','>>>']

**usage**
```
log('text').text('ERROR').log()
//<<<ERROR>>> text
log('text').text('WARNING',['###','###']).log()
//###WARNING### text
```

### pipe
It enable to create other way of logging by predefining pattern
as parameters it accepts other *l-print* function names

**usage**
```
const error = l().pipe('date', 'red', 'log')
error('Error message')
//[22:22:22] Error message
// printed with red font
```

### log
Logging to console
```
log()
```

