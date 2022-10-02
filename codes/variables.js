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
