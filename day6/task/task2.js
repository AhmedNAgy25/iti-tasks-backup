// *get the number from user
let date = prompt(`enter date as (DD-MM-YYYY)`);
// let date = "09-10-2005";
console.log(date);
const dateValidation = function (date) {
  //* valid the dashes
  let countDash = 0;
  for (let i = 0; i < date.length - 1; i++) {
    if (date[i] === "-") {
      countDash++;
    }
  }
  let devidedDate = date.split("-");
  //   console.log(devidedDate);
  //*valid the dashes and digits for each field
  if (
    devidedDate[0].length != 2 ||
    devidedDate[1].length != 2 ||
    devidedDate[2].length != 4 ||
    countDash != 2
  ) {
    //* pop alert
    alert(`wroong date format`);
    return console.error(`follow my instructions -_- wrong date format`);
  } else {
    //* validate date range
    if (
      devidedDate[0] > 31 ||
      devidedDate[0] < 1 ||
      devidedDate[1] > 12 ||
      devidedDate[1] < 1 ||
      devidedDate[2] > 2025 ||
      devidedDate[2] < 1800
    ) {
      //* pop alert
      alert(`invalid date`);
      return console.error(`fool :)`);
    }
    //* edit date to recreate it with date obj
    devidedDate[0] -= 1;
    return devidedDate;
  }
};
// dateValidation(date);

//*      Refactor user inputs      //
const returnNewDate = function (dateData) {
  //   console.log(dateData);
  let newDate = new Date(dateData[0], dateData[1], dateData[2]);
  //   console.log(newDate);
  return newDate;
};
//*  Show the alert to user     //
let alertToUser = returnNewDate(dateValidation(date));
alert(alertToUser);
