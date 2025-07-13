function a() {
  function b() {
    console.log(myvar); //2
  }
  console.log(myvar); //undefined
  var myvar = 2;
  b();
}
a();
console.log(myvar); //error
