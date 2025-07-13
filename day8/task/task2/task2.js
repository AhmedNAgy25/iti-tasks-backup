const startBtn = document.getElementById("startBtn");
const clockDiv = document.getElementById("clockDisplay");

let clockInterval;

startBtn.addEventListener("click", function () {
  alert("clock started");

  clockInterval = setInterval(() => {
    const now = new Date();
    clockDiv.textContent = now.toLocaleTimeString();
  }, 1000);
});
document.addEventListener("keydown", (e) => {
  if (e.altKey && e.key === "w") {
    clearInterval(clockInterval);
    alert("stop clock");
  }
});
