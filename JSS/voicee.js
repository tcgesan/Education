
let timer;
let timeLeft = 20;


let questions = [

     
     { 
         question: " He expects him soon. (make it passive) ", 
         options: [" He is expected soon ", " We are expected him soon ", " He is expect soon ", " We are expected soon "], 
         answer: 0
     },
     
     { 
         question: " The passive from in the present perfect of the sentence - ( He has eaten a mango)  ", 
         options: [" A mango has been eaten by him", " A mango is being written by him", " A mango is being eaten by him ", " A mango had been eaten by him"], 
         answer: 0
     },
     
     { 
         question: " Choose the correct passive sentence:  ", 
         options: [" The meeting is to be reschedule ", " The meeting is to be rescheduled ", " The meeting is to rescheduled  ", " The meeting to be rescheduled "], 
         answer: 1
     },
     
     { 
         question: "  The active form of the sentence- ( They were made to go home by him)  ", 
         options: [" He made them go home", " He made them gone home  ", " He made them going home ", " He made them to go home"], 
         answer: 0
     },

     
     { 
         question: "  What is the active/passive voice of ( They say that you did that ) - ", 
         options: ["You are told to do that  ", " You are advised to do that ", " You did that said by them ", " You are said to have done that "], 
         answer: 3
     },
     
     { 
         question: "  Which one of the following sentences is in passive form? ", 
         options: [" They are building a new road in the city", " The room has been cleaned ", "  Somebody has cleaned the room", " Somebody is using the computer now "], 
         answer: 1
     },
     
     { 
         question: "  ( He is beating the thief )  বাক্যটির সঠিক Passive form- ", 
         options: [" The thief was being beatten by him.", "  The thief is being beat by him", " The thief is beaten by him ", " The thief is being beaten by him "], 
         answer: 3
     },
     
     { 
         question: "  ( Do not open the door )  The correct passive form of the sentence is - ", 
         options: [" Let the door not be opened ", "  Let not open the door", " Let the door be open ", " Let the door be not open"], 
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


