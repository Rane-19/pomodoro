'use strict';

// Variable Declaration

let workInterval; // This variable is used to store the interval ID for the work period timer. We need it to keep track of the interval so that we can clear it when necessary, such as when resetting the timer or switching from work to break mode.
let breakInterval; // Similar to workInterval, this variable stores the interval ID for the break period timer. It allows us to control and clear the break timer separately from the work timer.
let timer; // This variable is used to keep track of the current timer value. We use it within the timer functions to countdown the time and update the display accordingly.
let isWorking = true; // This boolean variable is used to track whether the timer is currently in work mode (true) or break mode (false). It helps us determine which interval to start when the start button is clicked and which mode to switch to when the timer reaches zero.


// Timer Functions

function startTimer (duration, display) {
    
}