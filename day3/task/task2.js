alert("welcome to my site");
var userName = prompt("enter your name");

do {
  var userColor = prompt("choose color [red, green, blue]");
} while (!userColor);

switch (userColor) {
  case "red":
  case "Red":
    document.write(`<h1 style="color:red;">welcome ${userName} </h1>`);
    break;

  case "green":
  case "Green":
    document.write(`<h1 style="color:green;">welcome ${userName} </h1>`);
    break;
  case "blue":
  case "Blue":
    document.write(`<h1 style="color:blue;">welcome ${userName} </h1>`);
    break;
  default:
    document.write(`<h1 style="color:black;">welcome ${userName} </h1>`);
}
