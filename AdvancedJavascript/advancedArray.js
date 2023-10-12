var array = [1, 2, 10, 16];

const double = [];

//you should use map.
const newArray = array.forEach((num) => {
  num * 2;
});

console.log(newArray);

//map, filter, reduce

//no side effects because
//it returns a value
const mapArray = array.map((num) => num * 2);

console.log("map", mapArray);

const filerArray = array.filter((num) => num === 10);

const reduceArray = arrray.reduce((accumulator, num) => {
  return accumulator + num;
});
