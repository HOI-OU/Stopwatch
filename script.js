//Defining Time Variables
let minutes = 00;
let seconds = 00;
let milliseconds = 00;

let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let appendMilliseconds = document.getElementById("milliseconds");

let h2 = document.getElementById("h2")


//Audio
let audio = document.getElementById("audio");




//Start Click
//set stopwatch interval to start after 10 millisecond
document.getElementById("start").addEventListener("click", () => {
    interval = setInterval(stopwatch, 10);
    audio.currentTime = 1;
    audio.play()
    int = setInterval(function() {
        if (audio.currentTime > 1.5) {
            audio.pause();
            clearInterval(int);
        }
    }, 10);
    h2.style.color = 'green';
    
})


//Stop Click
//stop when clear interval
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
    audio.currentTime = 1;
    audio.play()
    int = setInterval(function() {
        if (audio.currentTime > 1.5) {
            audio.pause();
            clearInterval(int);
        }
    }, 10);
    h2.style.color = 'red';
})

//Reset Click
//stop when clear interval and reset values to 00
//append values to the times to reset all values to 00
document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    milliseconds = "00";
    seconds = "00";
    minutes = "00";
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendMilliseconds.innerHTML = milliseconds;
    audio.currentTime = 1;
    audio.play()
    int = setInterval(function() {
        if (audio.currentTime > 1.5) {
            audio.pause();
            clearInterval(int);
        }
    }, 10);
    h2.h2.style.color = 'white';
})


//Display Timer
//increment milliseconds
function stopwatch() {
    milliseconds++;

    //Check Function
    //if ms < 9, append 0
    if (milliseconds < 9) {
        appendMilliseconds.innerHTML = "0" + milliseconds;
    }
    //if ms > 9, display millisecond increments
    if (milliseconds > 9) {
        appendMilliseconds.innerHTML = milliseconds;
    }
    //if ms reaches 100, increment seconds where 0 appends seconds
    //reset ms back to 0 
    //append ms to 0
    //display ms increments
    if (milliseconds > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milliseconds = "0";
        appendMilliseconds.innerHTML = "0" + milliseconds;
    }
    //if s is > 9  display second increments
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    //if it reaches 60, increment m where 0 appends m
    //reset s back to 0
    //append s to 0
    //display s increments
    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = "0";
        appendSeconds.innerHTML = "0" + seconds;
    }
}