import Animal from "./animal.js";

class Dog extends Animal {
  // constructor: This is a special
  // method used for creating and initializing
  // an object created from a class.
  constructor(name, age, breed) {
    //  The super keyword calls
    // the constructor of the parent class (Animal).
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`My name is ${this.name}`);

    console.log(`I'm a ${this.breed}`);
    const humanAge = this.getHumanAge();
    console.log(`I am ${humanAge} years old in human years`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;
