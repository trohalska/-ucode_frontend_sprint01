'use strict';

function removeDouble(arr, str) {
<<<<<<< HEAD
<<<<<<< HEAD
  let ind;

  ind = arr.indexOf(str);
  while (ind !== -1) {
    arr.splice(ind, 1);
    ind = arr.indexOf(str, ind + 1);
  }
}

function removeEmpty(arr) {
  removeDouble(arr, '');
  const uniqueSet = new Set(arr);
  return [...uniqueSet];
}

function addWords(obj, str) {
  let arr, strArr, i, ind;

  arr = removeEmpty(obj.words.split(' '));
  strArr = removeEmpty(str.split(' '));

  for (i = 0; i < strArr.length; ++i) {
    ind = arr.indexOf(strArr[i]);
    if (ind === -1)
      arr.push(strArr[i]);
  }
  obj.words = arr.join(' ');
}

function removeWords(obj, str) {
  let arr, strArr, i;

  arr = removeEmpty(obj.words.split(' '));
  strArr = removeEmpty(str.split(' '));

  for (i = 0; i < strArr.length; ++i) {
    removeDouble(arr, strArr[i]);
  }
  obj.words = arr.join(' ');
}

function changeWords(obj, str1, str2) {
  removeWords(obj, str1);
  addWords(obj, str2);
}

/*
const obj = {words: 'newspapers newspapers  books magazines'};
=======
=======
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2
	let ind;

	ind = arr.indexOf(str);
	while (ind !== -1) {
		arr.splice(ind, 1);
		ind = arr.indexOf(str, ind + 1);
	}
}

function removeEmpty(arr) {
	removeDouble(arr, '');
	const uniqueSet = new Set(arr);
	return [...uniqueSet];
}

function addWords(obj, str) {
	let arr, strArr, i, ind;

	arr = removeEmpty(obj.words.split(' '));
	strArr = removeEmpty(str.split(' '));

	for (i = 0; i < strArr.length; ++i) {
		ind = arr.indexOf(strArr[i]);
		if (ind === -1)
			arr.push(strArr[i]);
	}
	obj.words = arr.join(' ');
}

function removeWords(obj, str) {
	let arr, strArr, i;

	arr = removeEmpty(obj.words.split(' '));
	strArr = removeEmpty(str.split(' '));

	for (i = 0; i < strArr.length; ++i) {
		removeDouble(arr, strArr[i]);
	}
	obj.words = arr.join(' ');
}

function changeWords(obj, str1, str2) {
	removeWords(obj, str1);
	addWords(obj, str2);
}

const obj = {
	words: 'newspapers newspapers  books magazines'
};
<<<<<<< HEAD
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2
=======
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2

console.log(obj); // {words: "newspapers newspapers  books magazines"}

addWords(obj, 'radio newspapers');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}
<<<<<<< HEAD
<<<<<<< HEAD
*/
=======
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2
=======
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2
