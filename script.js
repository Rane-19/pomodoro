'use strict';

// Variable Declaration

// const start = getElementbyId('start-btn');
// document.getElementById('timer-display').innerHTML = "Lourane";

const start = document.querySelectorAll("start");
const pause = document.querySelectorAll("pause");
const reset = document.querySelectorAll("reset");


// Timer Functions

function startTimer (duration, display) {
    document.getElementById('timer-display').innerHTML = duration;
}

startTimer(25:00, null);