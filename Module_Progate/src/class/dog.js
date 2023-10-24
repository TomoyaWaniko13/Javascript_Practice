import chalk from "chalk";

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
    const humanAge = this.getHumanAge();
    this.greet();
    console.log(chalk.yellow(`My name is ${this.name}`));
    console.log(chalk.bgCyan(`I am ${this.breed}`));

    console.log(`I'm ${this.age} years old`);
    console.log(`I am ${humanAge} years old in human years`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;
