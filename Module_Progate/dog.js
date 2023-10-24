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
    console.log();
  }

  getHumanAge() {
    return this.age * 7;
  }
}
