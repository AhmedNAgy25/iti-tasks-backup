let sum = 0,
  mul = 1,
  div = 1;
let value;

for (let i = 1; i <= 3; i++) {
  value = parseFloat(prompt(`enter number ${i}:`));
  sum += value;
  mul *= value;
  div /= value;
}
alert(
  `ading multiplying dividing \n sum = ${sum}\n multipllcation = ${mul}\n division = ${div.toFixed(
    2
  )}`
);
