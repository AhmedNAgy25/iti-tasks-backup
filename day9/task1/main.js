let elProgress = document.getElementById("progress");
let elH2 = document.getElementsByTagName("h2")[0];
let clockInterval;

clockInterval = setInterval(() => {
  elProgress.value += 1;
  elH2.innerText = elProgress.value + "%";
  if (elProgress.value === 100) {
    elProgress.value = 0;
  }
}, 40);
