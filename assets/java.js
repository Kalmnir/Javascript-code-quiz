var timer = document.getElementById("timer");
var userScore = document.getElementById("score");
var testTitle = document.getElementById("test-title");
var testDescription = document.getElementById("test-description");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons")
var startButton = document.getElementById("start-game");
var quiz = document.getElementById("quiz");
var nextQuestion
var score = 0;
var currentIndex = 0;
var secondsRemaining = 65;
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    {
        question: "Which of the following is NOT a primitive data type used in Javascript?",
        choices: ["strings", "boolenas", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        question: "What can be stored in an array?",
        choices: ["strings and numbers", "objects", "other arrays", "all the above"],
        answer: "all the above"
    },
    {
        question: "How do you check if two arrays have the same type and value?",
        choices: ["==", "===", "!=", "&&"],
        answer: "==="
    },
    {
        question: "What must be used in order to enclose a string value assigned to a variable?",
        choices: ["quotes", "curly brackets", "parantheses", "brackets"],
        answer: "quotes"
    },
    {
        question: "You can gain access to an html element in javascript by using which statement?",
        choices: ["getElelemtById", "getElementByClassName", "getElementByTagName", "all the above"],
        answer: "all the above"
    }
];

startButton.addEventListener("click", runTest);
function runTest() {
    testDescription.classList.add("hide");
    startButton.classList.add("hide");
    quiz.classList.remove("hide");
    nextQuestion = questions[currentIndex]
    showQuestion(nextQuestion)
    runTimer()

}



function showQuestion(question) {
    questionElement.innerText = question.question
    question.choices.forEach(element => {
        var button = document.createElement("button");
        button.innerText = element
        button.classList.add("button");
        answerButtons.appendChild(button);
        button.addEventListener("click", displayNextQuestion);

    });
}

function displayNextQuestion(event) {
    currentIndex++
    if (currentIndex < questions.length) {
        correction(event.target.innerText == nextQuestion.answer)
        answerButtons.innerHTML = ""
        if (currentIndex < questions.length) {
            nextQuestion = questions[currentIndex]
            showQuestion(nextQuestion)
        } else {
            currentIndex = 0
            showQuestion(nextQuestion)
        }
    } else {
        endgame()
    }
}

function correction(response) {
    if (response) {
        alert.innerText = "good"
        score = score + 1
        userScore.innerHTML = score
    } else {
        alert.innerText = "Wrong"
        secondsRemaining = secondsRemaining - 5
        timer.innerHTML = secondsRemaining
        score = score - 1
        userScore.innerHTML = score
    }
    setTimeout(function () {
        alert.innerText = ""

    }, 1000);
}

function runTimer() {


    var timerInterval = setInterval(function () {
        secondsRemaining--;
        timer.textContent = secondsRemaining;

        if (secondsRemaining === 0) {
            clearInterval(timerInterval);

        }

    }, 1000);

}

function endgame() {
    userScore.innerText = score, secondsRemaining;
    quiz.classList.add("hide");
    timer.classList.add("hide");
    window.prompt("please type your initials");


}
