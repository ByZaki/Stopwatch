const counterElement = document.querySelector("#counter");

let counter = 0;
let timerID;

//start
const btnStart = document.querySelector("#start");
btnStart.onclick = function () {
  timerID = setInterval(function () {
    counter++;
    counterElement.innerText = counter;
  }, 1000);
};

//stop
const btnStop = document.querySelector("#stop");
btnStop.onclick = function () {
  clearInterval(timerID);
};

//reset

const btnReset = document.querySelector("#reset");
btnReset.onclick = function () {
  counter = 0;
  counterElement.innerText = counter;
  clearInterval(timerID);
};
