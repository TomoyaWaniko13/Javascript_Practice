var array = [1, 2, 10, 16];

console.log("original", array);

const double = [];

const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log("forEach", double);

const mapArray = array.map((num) => num * 2);

console.log("map", mapArray);

const filterArray = array.filter((num) => num > 3);

console.log("filter", filterArray);

const reduceArray = array.reduce((accumulator, num) => accumulator + num);

console.log("reduce", reduceArray);
