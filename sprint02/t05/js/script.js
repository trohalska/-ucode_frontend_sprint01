'use strict'

let str1 = 'You\'re catnip to a girl like me. Handsome, dazed, and to die for...';
let str2 = 'Batman: "I tried to save you."';
let str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."';

let charNumber = 2;
const regex = /catwoman/gi;

alert(`This page says
Jusr string: ${str1}
Length: ${str1.length}
Character number ${charNumber} is: ${str1.charAt(charNumber)}
Yo uppercase: ${str1.toUpperCase()}
Concatination: ${str1.concat(' - Catwoman')}
${'[Batman Returns] '.concat(str2)}
${str3.replace(regex, ' ')}`);