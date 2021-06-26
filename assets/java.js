var timer = document.getElementById("#timer");
var score = document.getElementById("#score");
var question = document.getElementById("#question");
var answer1 = document.getElementById("#answer1");
var answer2 = document.getElementById("#answer2");
var answer3 = document.getElementById("#answer3");
var answer4 = document.getElementById("#answer4");
var startButton = document.getElementById("#start-game");

var question1 = {
    name: "Which of the following is NOT a primitive data type used in Javascript?",
    wrong1: "Boolean",
    wrong2: "String",
    right: "Object",
    wrong3: "Number"
};


function runTest() {


}

function runTimer() {
    var secondsRemaining = 65;
    var timerInterval = setInterval(function () {
        secondsRemaining--;
        timer.textContent = secondLeft;

        if (secondsRemaining === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

startButton.addEventListener("click", function () {
    runTimer()
});