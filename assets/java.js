var timer = document.getElementById("timer");
var score = document.getElementById("score");
var testTitle = document.getElementById("test-title");
var testDescription = document.getElementById("test-description");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var startButton = document.getElementById("start-game");
var quiz = document.getElementById("quiz");

var question1 = {
    name: "Which of the following is NOT a primitive data type used in Javascript?",
    wrong1: "Boolean",
    wrong2: "String",
    right: "Object",
    wrong3: "Number"
};


function runTest() {
    testTitle.classList.add("hide");
    testDescription.classList.add("hide");
    startButton.classList.add("hide");
    quiz.classList.remove("hide");
    question.textContent = question1.name;
    answer1.textContent = question1.wrong1;
    answer2.textContent = question1.wrong2;
    answer3.textContent = question1.right;
    answer4.textContent = question1.wrong3;

}


function runTimer() {

    var secondsRemaining = 65;
    var timerInterval = setInterval(function () {
        secondsRemaining--;
        timer.textContent = secondsRemaining;

        if (secondsRemaining === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);

}

function sendMessage() {

}
startButton.addEventListener("click", function () {
    runTest();
    runTimer()
});