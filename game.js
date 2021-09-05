var number1 = Math.round(Math.random() * 100)
const number1box = document.getElementById("number1")
    // number1box.innerHTML = number1

var number2 = Math.round(Math.random() * 100)
const number2box = document.getElementById("number2")
    // number2box.innerHTML = number2

var operator;
var score = 0;

var number3box = document.getElementById("number3")
var number3

function randomise() {
    //Iteration1

}

randomise();

//Iteration2

var time = 20;
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();