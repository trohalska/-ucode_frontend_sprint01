'use strict';

function concat(s1, s2) {
<<<<<<< HEAD
<<<<<<< HEAD
  oneArg.count = 0;

  function oneArg() {
    let s2 = prompt('Enter second string: ');

    oneArg.count++;
    return s1 + ' ' + s2;
  }

  if (s2 === undefined)
    return oneArg;
  else
    return s1 + ' ' + s2;

=======
=======
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2
	oneArg.count = 0;

	function oneArg() {
		let s2 = prompt('Enter second string: ');

		oneArg.count++;
		return s1 + ' ' + s2;
	}

	if (s2 === undefined) {
		return oneArg;
	} else {
		return s1 + ' ' + s2;
	}
<<<<<<< HEAD
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2
=======
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2
}
