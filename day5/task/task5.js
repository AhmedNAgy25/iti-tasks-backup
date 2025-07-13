
// function smartReverse() {
//   var arr = [];
//   for (var i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }
//   return arr.reverse().join("");
// }
// console.log(smartReverse(1, 5, 8, 7, 3, 4));
// console.log(smartReverse("a", "d", "2", "g", "a", "5"));
// console.log(smartReverse("a", ['hamada'], "2", "g", 4, "5"));


//bonus

var input = prompt(`enter string`);

var considerCase = confirm(`case sensitive?`);
// console.log(considerCase);

var original = considerCase ? input : input.toLowerCase();

var reversed = "";
for (var i = original.length - 1; i >= 0; i--) {
  reversed += original[i];
}
original === reversed ? alert(`palindrom`) : alert(`not palindrom`);
