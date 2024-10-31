let timer;
let timeLeft = 20;


let questions = [

     
     { 
         question: "No spelling error occurs in . ", 
         options: ["interogate ", " intarrogate", " interogate ", " interrogate"], 
         answer: 3
     },
     
     { 
         question: "Which is correct ? ", 
         options: ["Sculpturist ", " Sculpore", " Sculptor", "Sculpturer "], 
         answer: 2
     },
     
     { 
         question: "Find the correctly spelt word - ", 
         options: ["Miscellaneous ", "Miscellanous ", " Miscllancous", " Miscelaneous"], 
         answer: 0
     },
     
     { 
         question: " No spelling mistake occurs in -", 
         options: ["hedious ", " hindeous", " hideuous", " hideius"], 
         answer: 1
     },
     
     { 
         question: " Which spelling is correct ?", 
         options: ["necessary ", " nesessary", " necessery", "neccesary "], 
         answer: 0
     },
     
     { 
         question: "Find the incorrectly spelled word . ", 
         options: [" committe", " committe", "saperated ", " psychology"], 
         answer: 2
     },
     
     { 
         question: " Which word is correctly spelt ?", 
         options: [" renaisance ", " quotidian", "etiqueette ", "repetation "], 
         answer: 1
     },
     
     { 
         question: "Which one of the following is the correctly spelling ? ", 
         options: [" Abborigines", "Aboriginnes ", "Aborigines ", " Aboregence"], 
         answer: 2
     },
     
     { 
         question: " Which is the currency name of China ? ", 
         options: [" Yuan", " won", " Rupiah", " Renminbi"], 
         answer: 0
     },
     
     { 
         question: "Which is correct ? ", 
         options: ["Pillar ", "Pilar ", " Piler", "Piller "], 
         answer: 0
     },
     
     { 
         question: " Find the word that is spelt incorrectly .", 
         options: [" criticised", " curiosity", " attendence", "carefullly "], 
         answer: 2
     },
     
 
 
]





let currentQuestionIndex;

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            document.getElementById("next").style.display = "block";
        }
    }, 1000);
}

function displayQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[currentQuestionIndex];
    
    document.getElementById("question").innerText = currentQuestion.question;
    
    const answerDivs = document.querySelectorAll('.answer');
    answerDivs.forEach((div, index) => {
        div.innerText = currentQuestion.options[index];
        div.className = "answer"; // Reset class
        div.style.pointerEvents = 'auto'; // Enable clicks
    });

    timeLeft = 20;
    document.getElementById("timer").innerText = timeLeft;
    startTimer();
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    const answerDivs = document.querySelectorAll('.answer');

    if (selectedIndex === currentQuestion.answer) {
        document.getElementById("correctSound").play();
        answerDivs[selectedIndex].classList.add("correct");
        answerDivs.forEach(div => div.style.pointerEvents = 'none'); // Disable clicks after correct answer
    } else {
        document.getElementById("incorrectSound").play();
        answerDivs[selectedIndex].classList.add("incorrect");
        // Do not disable clicks, allowing the user to try again
    }

    // Show the next button after selecting an answer
    document.getElementById("next").style.display = "block";
}

function nextQuestion() {
    displayQuestion();
    document.getElementById("next").style.display = "none";
    const answerDivs = document.querySelectorAll('.answer');
    answerDivs.forEach(div => {
        div.classList.remove("correct", "incorrect");
    });
}


window.onload = displayQuestion;



// Back Button
function goBack() {
    window.history.back();
}


