/*
node function
*/

// function, default value, annonumous function, arrow function and it's scope of this keyword

// function ****
function add1(firstNum, secondNum) {
    console.log(arguments); //  See all arguments as an array!! *
    return arguments[0] + secondNum;
}
// Javascript doesnot allow function overloading
var res = add1(2, 5, 8); // Even if we defined only 2 arguments for this function, we can still pass more or less then 2 args.**
console.log(res);   //7

// Constant as Default values (default values in arguments is in es6)   **
function add2(firstNum , secondNum = firstNum, thirdNum = 5) {
    //return firstNum + secondNum + thirdNum;
    // [es5] way of doing it is ********
    console.log(firstNum, ' ', secondNum, ' ', thirdNum);
    return (firstNum || 0) + (secondNum || 0) + (thirdNum || 0);
}

//  In javascript we must handle the paremeter passing exceptions
var res = add2(6); 
console.log(res);   //11

// array as default value   **
function addArray(arr1 = [], arr2 = [], arr3 = [8,9]) {
    return [...arr1, ...arr2, ...arr3];
}
var array = addArray([1, 5], []);
console.log(array); //[ 1, 5, 8, 9 ]

//  Object as default value **
let x = {
    a: 4,
    b: 5
}
let addObjProps = function ({ a = 0, b = 0 } = {}) {
    return a + b;
}
console.log(addObjProps()); //0
console.log(addObjProps({ a: 4, b: 6 }));   //10
console.log(addObjProps(x));    //9
console.log('-----------');
//  Annonumous function
let funcAnn = function (arg) {
    console.log(arg);
};
funcAnn(5); //5

funcAnn(09, 8);

// Arrow function (Always a better choice)
let funcArrow = (arg) => {
    console.log(arg);
};
funcArrow(6); //6

// Scope of 'this' keyword in function vs Arrow-function

class Person {
    constructor(name) {
        this.name = name;
    }
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name); // here 'this' means the scope of the whole class
        }, 0);
    }
    printNameFunction() {
        let name = 't';
        setTimeout(function () {let name = 'tr';
            console.log('Function: ' + this.name);  // here 'this' means the scope of this annonymous function
        }, 0);
    }
}
let person = new Person('Bob');
person.printNameArrow();    //Bob 
person.printNameFunction(); //undefined
console.log(this.name); //undefined
console.log(person.name); //undefined