var timer = document.getElementById("timer");
var testTitle = document.getElementById("test-title");
var testDescription = document.getElementById("test-description");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons")
var startButton = document.getElementById("start-game");
var quiz = document.getElementById("quiz");
var scoreInput = document.getElementById("score-input");
var scoreSubmit = document.getElementById("score-button");
var alertText = document.getElementById("alert");
var submitBox = document.getElementById("submit-box")
var nextQuestion
var userScore = 0;
var currentIndex = 0;
var secondsRemaining = 65;
var timerInterval;
var allScores = JSON.parse(localStorage.getItem("userData")) || [];
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

scoreSubmit.addEventListener("click", function (event) {
    event.preventDefault()
    let inputName = document.getElementById("input-name").value
    scorePage(inputName, secondsRemaining)
    console.log("click")
});

submitBox.addEventListener("submit", function (event) {
    event.preventDefault()
    let inputName = document.getElementById("input-name").value
    scorePage(inputName, secondsRemaining)
    console.log("submit")
});

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

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "./assets/highscore.html";
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
        endGame()
    }
}

function correction(response) {
    if (response) {
        alertText.innerText = "Good"
    } else {
        alertText.innerText = "Wrong"
        secondsRemaining = secondsRemaining - 10
        timer.innerHTML = secondsRemaining
    }
    setTimeout(function () {
        alertText.innerText = ""

    }, 1000);
}

function runTimer() {


    timerInterval = setInterval(function () {
        secondsRemaining--;
        timer.textContent = secondsRemaining;

        if (secondsRemaining === 0) {
            clearInterval(timerInterval);
            endGame()
        }

    }, 1000);

}

function endGame() {
    clearInterval(timerInterval);
    userScore.innerText = secondsRemaining;
    quiz.classList.add("hide");
    scoreInput.classList.remove("hide");
}
