//reference type
var object1 = { value1: 10 };
var object2 = object1;
var object3 = { value: 10 };

//context vs scope
function a() {
  let a = 4;
}

//instantiation
const object4 = {
  a: function () {
    console.log(this);
  },
};

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    //super() take us up to the constructor of the Player:
    super(name, type);
  }
  play() {
    console.log(`I'm a ${this.type}`);
  }
}

//new means "make an instance of Wizard"
const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
