/*
node const
*/

/// const in javascript

//  apple = 4;  // Not permitted, Its a const
const apple = 9;
//  apple = 40;  // Not permitted, Its a const
const person = {
  name: "Alex Joshi",
  age: 22,
};
console.log(person.name);
/* *
//  Redefining Not permitted, Its a constant
const person = {
  name: "Optimus",
};
* */
//  Value assign is permitted
person.name = "Optimus Prime";
const arr = [1, 2, 3];
// arr = [20, 21]; //Re-assign isNot permitted
arr.push(8); // adding element is permitted
arr[0] = 10; // changing values also permitted
console.log(arr);
console.log(person.age);
console.log(person.name);

// ES5(older) way of defining constant type of variable
/***    Works on browser, not in nodejs **

Object.defineProperty(window, 'PI', { value: 3.14, writable: false });

PI = 4;
//  Prints 3.14!
console.log(PI);    //  Will not result compilation error

/******/
