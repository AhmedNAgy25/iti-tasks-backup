const values = [];
for (let i = 1; i <= 5; i++) {
  values.push(parseInt(prompt(`enter number ${i}`)));
}

const copyArr = [].concat(arr);

const asc = copyArr(values).sort((a, b) => a - b);
const desc = copyArr(values).sort((a, b) => b - a);

alert(`just sorting\n 
  before order: ${values.join(" - ")}\n 
  order desc: ${desc.join(" - ")}\n 
  orderr asc: ${asc.join(" - ")}`);
