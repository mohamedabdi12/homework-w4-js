
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
// var secondsLeft = 30;

var quizQuestion = document.getElementById("quizQuestion");
// var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");



var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
// var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "Inside which HTML element do we put the JavaScript?",
    choiceA: "js",
    choiceB: "script",
    choiceC: "scripting",
    choiceD: "JavaScript",
    correctAnswer: "B"
}, {
    question: "Which bird is this?",
    choiceA: "Grey Warbler/Riroriro",
    choiceB: "Marsh Crake/Koitareke",
    choiceC: "Fantail/Pīwakawaka",
    choiceD: "Saddleback/Tīeke",
    correctAnswer: "C"
}, {
    question: "Which bird is this?",
    choiceA: "Morepork/Ruru",
    choiceB: "Takahē",
    choiceC: "Wax-eye",
    choiceD: "New Zealand Parakeet/Kākāriki",
    correctAnswer: "A"
}, {
    question: "Which bird is this?",
    choiceA: "Tūī",
    choiceB: "Whitehead/Pōpokotea",
    choiceC: "Wrybill/Ngutu pare",
    choiceD: "Weka",
    correctAnswer: "A"
}, {
    question: "Which bird is this?",
    choiceA: "Westland Petrel/Tāiko",
    choiceB: "Variable Oystercatcher/Tōrea",
    choiceC: "Subantarctic Teal",
    choiceD: "New Zealand Dotterel/Tūturiwhatu",
    correctAnswer: "D"
}, {
    question: "Which bird is this?",
    choiceA: "Kākā",
    choiceB: "Kea",
    choiceC: "Kākāpō",
    choiceD: "Kōkako",
    correctAnswer: "C"
}, {
    question: "Which bird is this?",
    choiceA: "New Zealand Fairy Tern/Tara iti",
    choiceB: "White Heron/Kōtuku",
    choiceC: "Shore Plover/Tūturuatu",
    choiceD: "Spotted Shag/Parekareka",
    correctAnswer: "B"
}, {
    question: "Which bird is this?",
    choiceA: "New Zealand Robin/Toutouwai",
    choiceB: "Paradise Duck / Pūtakitaki",
    choiceC: "Pūkeko",
    choiceD: "Kea",
    correctAnswer: "D"
}, {
    question: "Which bird is this?",
    choiceA: "Kākā",
    choiceB: "Tomtit/Miromiro",
    choiceC: "Yellowhead/Mohua",
    choiceD: "Fiordland Crested Penguin/Tawaki",
    correctAnswer: "A"
}, {
    question: "Which bird is this?",
    choiceA: "Kiwi",
    choiceB: "New Zealand Pigeon/Kererū",
    choiceC: "Kingfisher/Kōtare",
    choiceD: "Eastern Bar-Tailed Godwit/Kuaka",
    correctAnswer: "B"
}, ];



var lastQuestion = questions.length - 1;
let questionIndex = 0;
let count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
// var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}



function beginQuiz() {
    start.style.display ="none";
    getQuestion();
	quiz.style.display = "block";
}

//  var secondsLeft = 100;
start.addEventListener("click",beginQuiz);
start.addEventListener("click",displayTimer);


// start quiz
function begintQuiz(){
    start.style.display = "nonw";
    getQuestion();
    quiz.style.display = "block";
    // getProgress();
    // getCounter();
    // TIMER = setInterval(getCounter,1000); // 1000ms = 1s
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
		scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
		scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
		scoreMessage.innerHTML = "<p>Great work! You really know your birds!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}

// function setTime() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         countdown.textContent = secondsLeft + " seconds left";
//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//         }
//     }, 1000)


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,1000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,1000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,1000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,1000);
        }
    }
}
// var gold = 'winner';
// var silver = 'good job';
// var bronze = 'try again'


// if( score <=2){
// 	medal.textContent = bronze;
// }else if(score >= 5 ){
// 	medal.textContent = silver;
// }else if(score >=7 ){
// 	medal.textContent = gold;

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
	quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}