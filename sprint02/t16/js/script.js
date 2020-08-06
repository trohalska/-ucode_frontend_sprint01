'use strict';

function firstElements(array, n) {
  let res = [],
      i;

  for (i = 0; i < n && i < array.length; ++i)
    res.push(array[i]);
  return res;
}

// var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];

// console.log(firstElements(heroes, 5));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]

// console.log(firstElements(heroes, 1));
// ["Captain America"]

// console.log(firstElements(heroes, 3));
// ["Captain America", "Hulk", "Thor"]

// console.log(firstElements(heroes, 6));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]

// console.log(firstElements(heroes, -1));
// []
