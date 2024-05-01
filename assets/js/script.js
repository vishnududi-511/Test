let hours = 40;
let minutes = 15;
let seconds = 12;
let milliseconds = 10;

function updateTime() {
  milliseconds--;

  if (milliseconds < 0) {
    milliseconds = 99;
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;

      if (minutes < 0) {
        minutes = 59;
        hours--;

        if (hours < 0) {
          // Timer finished
          clearInterval(timer);
          alert("Time's up!");
          return;
        }
      }
    }
  }

  // Format time nicely (hh:mm:ss:ms)
  let formattedTime = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}:${
    milliseconds < 10 ? "0" + milliseconds : milliseconds
  }`;
  document.getElementById("timer").textContent = formattedTime;
}
let navitems = document.querySelector(".navitems");
let menubox = document.querySelector(".menuicon");

menubox.addEventListener("click", function () {
  navitems.classList.toggle("show");
});
