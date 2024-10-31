
let timer;
let timeLeft = 20;


let questions = [

     
     { 
         question: " A speech full of too many word is - ", 
         options: ["a big speech ", "  maiden speech", " an unimportant speech ", "a verbose speech "], 
         answer: 3
     },
     
     
     { 
         question: " ' To talk ' is a good exercise for us . Here ' to talk ' is -", 
         options: ["a noun phrase ", " an adjective phrase", " a verb phrase ", " a participle phrase"], 
         answer: 0
     },
     
     
     { 
         question: " Bill of fair is - ", 
         options: ["  A chart of bus fare", " A price list", " A list of dishes at a resturant ", "A valuable document "], 
         answer: 2
     },
     
     { 
         question: " ' To read between the lines ' means --", 
         options: ["to read carefully ", " to read only some lines", " to read quickly to save time", " to read carefully to find out any hidden meaning "], 
         answer: 3
     },
     
     { 
          question: " What does the phrase ' Thousand of years ' mean ? ", 
          options: ["one thousand years ", " two thousand years", "  since ancient time", " for a very long time"], 
          answer: 3
      },
     { 
          question: " So quickly ---- he reached home on time . ", 
          options: ["he ran as ", " he ran that ", "  did he run that", " would he run that"], 
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


