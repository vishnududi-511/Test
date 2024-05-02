function startTimer(duration, display) {
  var timer = duration,
    days,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    days = Math.floor(timer / (60 * 60 * 24));
    hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
    minutes = Math.floor((timer % (60 * 60)) / 60);
    seconds = Math.floor(timer % 60);

    display.innerHTML =
      "<span>" +
      days +
      "d</span> " +
      hours +
      "hr " +
      minutes +
      "m " +
      seconds +
      "s ";

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var timer = 19 * 24 * 60 * 60 + 9 * 60 * 60 + 52 * 60 + 20, // in seconds
    display = document.getElementById("timer");
  startTimer(timer, display);
};
let navitems = document.querySelector(".navitems");
let menubox = document.querySelector(".menuicon");

menubox.addEventListener("click", function () {
  navitems.classList.toggle("show");
  const body = document.querySelector("body");
  if (navitems.classList.contains("show")) {
    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = "0";
    body.style.left = "0";
  } else {
    body.style.position = "relative";
  }
});

// accordion//
let accordion_boxes = document.querySelectorAll(".accordion-box");

accordion_boxes.forEach((items, index) => {
  let head_box = items.querySelector(".accordion_btn");
  let paragraph = items.querySelector(".accordion_para");
  let arrow_img = items.querySelector(".accordion_sign img");

  // to hide all except the first one //
  if (index !== 0) {
    paragraph.style.display = "none";
    arrow_img.style.transform = "rotate(0deg)";
  } else {
    // If the first accordion box is initially open, rotate the arrow image//
    arrow_img.style.transform = "rotate(180deg)";
  }

  // Add event listener to each button //
  head_box.addEventListener("click", function () {
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      arrow_img.style.transform = "rotate(180deg)";
    } else {
      paragraph.style.display = "none";
      arrow_img.style.transform = "rotate(0deg)";
    }

    // If an accordion box is opened, close other accordion boxes //
    if (paragraph.style.display === "block") {
      accordion_boxes.forEach((other, otherIndex) => {
        if (otherIndex !== index) {
          other.querySelector(".accordion_para").style.display = "none";
          other.querySelector(".accordion_sign img").style.transform =
            "rotate(0deg)";
        }
      });
    }
  });
});

let preloader = document.querySelector(".preloader");

setTimeout(() => {
  preloader.classList.add("-top-105");
}, 3000);

let scroll_button = document.querySelector(".scroll-button");

function backtoTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scroll_button.setAttribute("style", "display: flex;");
  } else {
    scroll_button.setAttribute("style", "display: none;");
  }
});

AOS.init({
  duration: 1200,
  once: true,
});
