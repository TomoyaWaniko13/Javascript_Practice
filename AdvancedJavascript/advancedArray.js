var array = [1, 2, 3, 4, 16];

const double = [];
const newArray = array.forEach((num) => double.push(num * 2););

console.log(newArray);

//map, filter, reduce

const mapArray = array.map(num =>  num * 2);

console.log("map", mapArray);

const filterArray = array.filter(num => num === 5);

console.log('filter',filterArray);

//reduce
// () is parameters {} is how to handle these parameters
const reduceArray = array.reduce((accumulator,num) =>{
  return accumulator + num;
},5);

console.log('reduce',reduceArray);

