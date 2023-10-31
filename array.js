const arr = [1, 2, 3, 4, 8];

const newArr = new Array(1, 2, 3, 4, 8);

// arr[0] = 0;
// console.log(arr, newArr, arr === newArr);

let mappedArr = arr.map((el) => {
  return el * 2;
});
let filteredArr = arr.filter((el) => {
  return el % 2 === 0;
});

let reducedArr = arr.reduce((prev, acc) => {
  return prev + acc;
}, 1);

// chaining
let chainedArr = arr
  .map((el) => {
    return el * 2;
  })
  .filter((el) => {
    return el % 8 === 0;
  });
console.log(mappedArr, filteredArr, reducedArr, chainedArr);

// JS methods

let arrTest = [1, 2];
console.log(arrTest.toString());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const delArr = fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits, delArr);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);

//sorting asc
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points);

//sorting desc
points.sort((a, b) => b - a);
console.log(points);

console.log(([a, b, ...rest] = [10, 20, 30, 40, 50]));

console.log(rest);
