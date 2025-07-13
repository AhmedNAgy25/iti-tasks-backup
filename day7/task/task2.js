let expression = "";

function EnterNumber(val) {
  expression += val;
  document.getElementById("Answer").value = expression;
}

function EnterOperator(op) {
  if (expression !== "" && !isOperator(expression.slice(-1))) {
    expression += op;
    document.getElementById("Answer").value = expression;
  }
}

function EnterEqual() {
  try {
    const result = eval(expression);
    document.getElementById("Answer").value = result;
    expression = result.toString();
  } catch (e) {
    document.getElementById("Answer").value = "Error";
    expression = "";
  }
}

function EnterClear() {
  expression = "";
  document.getElementById("Answer").value = "";
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

//colors
document.addEventListener("DOMContentLoaded", () => {
  let calculator = document.getElementById("calculator");
  calculator.addEventListener("click", (event) => {
    if (event.target.tagName === "INPUT" && event.target.type === "button") {
      changeCalculatorColor();
    }
  });
});

function changeCalculatorColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r},${b},${g})`;
  document.getElementById("calculator").style.backgroundColor = color;
}
