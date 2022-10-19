/*
node func_objects
*/
//  Creating objects from function-objects
//  Acts more like a blueprint or object type
var functionObj = function () {
    this.val1 = 20; //Public property
    var val2 = 10;  // private property
    // similarly private and public functions
    this.getVals = function (str) {
        if (str === 'val1') {
            return this.val1;
        } else if (str === 'val2') {
            return val2;
        }
        return null;
    }
};
function gg() {
    return 90;
}
console.log('*1',typeof gg);
// Created objects from master object 'functionObject'
var obj1 = new functionObj();
var obj2 = new functionObj();
console.log('*',typeof obj1);
//  Directly accessing is prohibited, cause these are not singleton
console.log(functionObj.val1);   //undefined

console.log(obj1.val1); //20
obj2.val1 = 100;
console.log(obj2.val1); //100
console.log(obj2.getVals('val1')); //100

console.log(obj1.val2); //undefined **
console.log(obj1 instanceof functionObj);    //true
console.log(obj2 instanceof functionObj);    //true