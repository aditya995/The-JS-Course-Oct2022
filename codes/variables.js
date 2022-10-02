/*
node variables
*/

/// Hoisting with var declaration

//  Tip: always declare variable at the top
car = 12; //  Value can be asigned before declaration!
var car = 40;
console.log("value of 'car'", car, "\n");
console.log("Hoisting with javascript");
var newV = 2;
function gg() {
  console.log("newV = " + newV);
  // comment next line to see magic 😆
  var newV; // This redeclares the variable in this function and it gets undefined as value
  newV = 8;
  console.log("newV = " + newV);
}
gg();

/**
Primary Datatypes:
String, Number, Boolean

Composite Datatypes:
Array, Object

Special Datatypes:
Undefined, Null

 */
console.log("Data Types: \n");
data;
console.log(typeof data); //undefined
data = 8;
console.log(typeof data); //number
var data = "StringData";
console.log(typeof data); //string
data = null;
console.log(typeof data); //object
data = true;
console.log(typeof data); //boolean
console.log("-----------");

/*

Difference between null and undefined
When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators, as the former performs type-conversion.

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true

*/
