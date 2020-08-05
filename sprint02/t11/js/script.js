'use strict'

let n = 8,
    i = 0,
    str = '';

do {
  str += `${n} * ${i} = ${n * i}\n`;
  i += 1;
} while (i < 10);

alert(str);