'use strict';

function concat(s1, s2) {
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
}
