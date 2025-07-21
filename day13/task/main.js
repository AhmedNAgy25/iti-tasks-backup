//task1
let x = 10;
let y = 20;

console.log(`x = ${x} , y = ${y}`);

[x, y] = [y, x];

console.log(`x = ${x} , y = ${y}`);

// ///////////////////////// //

const findMinMax = (...arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return [min, max];
};

const arr = [18, 25, 6, 2, -1, 45];
let min,
  max = 0;
[min, max] = findMinMax(...arr);
console.log(`min = ${min} \nand max = ${max}`);
//
console.log("=============".repeat(3));
//
//task2
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const allIsString = fruits.every((el) => typeof el === "string");
console.log(`did all elements is string ${allIsString}`);

const startWithA = fruits.some((el) => el.startsWith("a"));
console.log(`did all elements is start with 'a' ${startWithA}`);

const afterFilter_bs = fruits.filter(
  (el) => el.startsWith("b") || el.startsWith("s")
);
console.log(`filterd array start with b or s [${afterFilter_bs}]`);

const addLike = fruits.map((el) => `i like ${el}`);
console.log(`fruted that i like : [${addLike}]`);
