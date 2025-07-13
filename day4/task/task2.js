//2.1

const sum = function (x, y) {
  if (arguments.length != 2) {
    throw Error("you should pass 2 parameter to me -_-");
  }
  return x + y;
};
sum(1, 2);
sum(1, 2, 3);
sum(1);


// 2.2

const sumN = function () {
  var sum = 0;
  for (const i in arguments) {
    if (isNaN(arguments[i])) {
      throw Error("use only integers -_-");
    }
    sum += arguments[i];
  }
  return sum;
};
console.log(sumN(8, 9));
console.log(sumN(8, 12, 5, 9));
console.log(sumN(8, 9));
console.log(sumN());
console.log(sumN("hello"));
