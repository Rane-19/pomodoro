'use strict';

// Variable Declaration

// const start = getElementbyId('start-btn');
// document.getElementById('timer-display').innerHTML = "Lourane";

// Timer Functions

// function startTimer (duration, display) {
//     document.getElementById('timer-display').innerHTML = duration;
// }

const timer = document.getElementById("timer-display");
const start = document.getElementById("start-btn");
const pause = document.getElementById("pause-btn");
const reset = document.getElementById("reset-btn");

function startTimer(){
    console.log("start");
}

function pauseTimer(){
    console.log("pause");
}

function resetTimer(){
    console.log("reset");
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);