import "./styles.css";
// fetch the buttons by id
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
// fetch the display timer current content
let seconds = document.querySelector("#sec");
let minutes = document.querySelector("#min");
let hours = document.querySelector("#hr");
// timer local variables
let sec = 0;
let min = 0;
let hr = 0;
let timerId;
let timer = false; // to disable the respective buttons once the timer is started/paused
// adding the onclick event listener on the buttons
start.addEventListener("click", function () {
  // timer = true;
  if (!timer) {
    timer = true;
    // trigger the timer
    stopWatchTimer();
  }
});
stop.addEventListener("click", function () {
  // disable
  timer = false;
  // stop the setInterval timer
  clearInterval(timerId);
});
reset.addEventListener("click", function () {
  // clear all the variable and rest the timer
  min = 0;
  sec = 0;
  hr = 0;
  timer = false;
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  hours.innerHTML = "00";
  clearInterval(timerId);
});

function stopWatchTimer() {
  var minStr, secStr, hrStr; // stringify the time
  timerId = setInterval(function () {
    sec = sec + 1;
    secStr = sec;
    //if sec is single digit, add 0 infront
    if (sec < 10) {
      secStr = "0" + sec;
    }
    seconds.innerHTML = secStr;
    //minute count
    if (sec === 60) {
      sec = 0;
      seconds.innerHTML = "0" + sec;
      min = min + 1;
      minStr = min;
      if (min < 10) {
        minStr = "0" + min;
      }
      minutes.innerHTML = minStr;
      //hour count
      if (min === 60) {
        min = 0;
        minutes.innerHTML = "0" + min;
        hr = hr + 1;
        hrStr = hr;
        if (hr < 10) {
          hrStr = "0" + hr;
        }
        hours.innerHTML = hrStr;
      }
    }
  }, 1000); // 1000 milisec =1sec so we are running the timer everysec
}
