'use strict';

function copyObj(n) {
<<<<<<< HEAD
  return Object.assign({}, n);
=======
	return Object.assign({}, n);
>>>>>>> 3c0ab816af19bd586fc54a6d5775a4914c2afeb2
}

/*
const user = {name: 'Steve', surname: 'Rogers', age: 101, city: 'New York'};

console.log(user);
// {name: "Steve", surname: "Rogers", age: 101, city: "New York"}
let cpy = copyObj(user);
console.log(cpy);
// {name: "Steve", surname: "Rogers", age: 101, city: "New York"}

user.name = 'John';
console.log(user);
// {name: "John", surname: "Rogers", age: 101, city: "New York"}
console.log(cpy);
// {name: "Steve", surname: "Rogers", age: 101, city: "New York"}

cpy.age = 59;
console.log(user);
//{name: "John", surname: "Rogers", age: 101, city: "New York"}
console.log(cpy);
// {name: "Steve", surname: "Rogers", age: 59, city: "New York"}
*/