'use strict';

// Variable Declaration

// const start = getElementbyId('start-btn');
// document.getElementById('timer-display').innerHTML = "Lourane";

// Timer Functions

// function startTimer (duration, display) {
//     document.getElementById('timer-display').innerHTML = duration;
// }

const timerEl = document.getElementById("timer-display");
const start = document.getElementById("start-btn");
const pause = document.getElementById("pause-btn");
const reset = document.getElementById("reset-btn");

let interval
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;


    timerEl.innerHTML = formattedTime
}

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            alert("TIME'S UP!")
        }
    }, 1000
    )
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