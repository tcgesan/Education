


let questions = [

     
     { 
         question: " Synonym of 'Paint' is ----  ", 
         options: [" capture", "dye ", " dough ", "oblige "], 
         answer: 1
     },
     
     { 
         question: " Antonym of the word 'Obdurate' is ----  ", 
         options: [" Grim", " Acrimonius", "  Boorish", "Humane "], 
         answer: 3
     },
     
     { 
         question: " Which is the following word is the correct synonym of 'Libel' ? ", 
         options: ["misrepresentation ", "convincing ", "  annihilate ", " enervated"], 
         answer: 0
     },
     
     
     { 
         question: " The word 'audacious'  means -- ", 
         options: ["Dangerous  ", " Caring", "  Daring ", "Serious "], 
         answer: 2
     },
     
     
     { 
         question: " Opposite of Smart ? ", 
         options: ["Irrelevant  ", " Boring", " Stupid  ", "Difficult "], 
         answer: 2
     },
     
     
     { 
         question: " The word  'muting'  means --", 
         options: [" silent", "shout ", "  revolt ", " vocal"], 
         answer: 0
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


