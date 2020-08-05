'use strict'

let length = 3,
    i, j,
    str = '';

for (i = 1; i <= length; ++i) {
  for (j = 1; j <= i; ++j) {
    str += '*';
  }
  str += '\n';
}

alert(str);