class Car {
  age(x) {
    return x - this.year;
  }
  #date = new Date();
  #year = this.#date.getFullYear();
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.ageV = this.age(this.#year);
  }
}

let myCar = new Car("Ford", 2012);
// console.log(myCar.age(year));
console.log(Object.values(myCar));
console.log(Object.keys(myCar));
