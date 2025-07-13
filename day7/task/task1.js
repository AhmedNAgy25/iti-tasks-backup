function showError(message) {
  document.getElementById("errorMsg").textContent = message;
}

function clearError() {
  document.getElementById("errorMsg").textContent = "";
}

function getInputValues() {
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let email = document.getElementById("email").value.trim();
  return { name: name, age: age, email: email };
}

function validateEmail(email) {
  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

function validate(user) {
  if (user.name === "") {
    showError("Name is required");
    return false;
  }
  if (user.age === "") {
    showError("Age is required");
    return false;
  }
  if (user.email === "") {
    showError("Email is required");
    return false;
  }
  if (!validateEmail(user.email)) {
    showError("Invalid email format");
    return false;
  }
  clearError();
  return true;
}

function createCell(value) {
  let td = document.createElement("td");
  td.textContent = value;
  return td;
}

function addToTable(user) {
  let table = document.getElementById("dataTable");
  let tbody = table.getElementsByTagName("tbody")[0];
  let row = document.createElement("tr");

  row.appendChild(createCell(user.name));
  row.appendChild(createCell(user.age));
  row.appendChild(createCell(user.email));

  tbody.appendChild(row);
  table.style.display = "table";
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
}

function onAdd() {
  let user = getInputValues();
  if (validate(user)) {
    addToTable(user);
    clearInputs;
  }
}

function onReset() {
  clearInputs();
  clearError();
  let table = document.getElementById("dataTable");
  table.getElementsByTagName("tbody")[0].innerHTML = "";
  table.style.display = "none";
}
