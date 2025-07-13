function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "sunday";
      break;
    case 1:
      return "monday";
      break;
    case 2:
      return "tuesday";
      break;
    case 3:
      return "wednesday";
      break;
    case 4:
      return "thursday";
      break;
    case 5:
      return "friday";
      break;
    case 6:
      return "saturday";
      break;
  }
}
function returnDayOfDate(dateStr) {
  date = new Date(dateStr);
  console.log(dateStr);
  console.log(date);
  console.log(date.getDay());
  console.log(`the day is : ${getDayName(date.getDay())}`);
}
returnDayOfDate("2005-11-9");
