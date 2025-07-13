const str = prompt("enter string:");
let cout = 0;

for (let i = 0; i < str.length; i++) {
  str[i] === "e" && cout++;
}

alert(`there is e: ${cout} x`);
