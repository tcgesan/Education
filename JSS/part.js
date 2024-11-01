let timer;
let timeLeft = 20;


let questions = [

     
    { 
        question: " I have  a plan ------- it is bad weather .", 
        options: ["  However ", " despite ", " Although  ", " None "], 
        answer: 0
    },
    
     
    { 
        question: " There is ----------- hope of her recovery. ", 
        options: [" many ", " little ", " very  ", " few"], 
        answer: 1
    },
    
    { 
          question: " The fibrous membranes surrounding -------- add strength to the parts of the body they cover . ", 
          options: [" moreover", "and ", "since ", " furthermore"], 
          answer: 1
      },
    
    { 
          question: " ---------- his becoming a teacher, he does not have any moral scruples. ", 
          options: [" Although", " Despite of ", " In spite of  ", " Instead of"], 
          answer: 2
      },
    


    {  
          question: " ---------- his alert and vigilant presence,all predatory animals were said to have been kept within bounds . ", 
          options: ["Hence ", "However ", " in addition to", " Because of "], 
          answer: 3
      },
    


//     { 
//           question: "  ", 
//           options: [" ", " ", " ", " "], 
//           answer: 3
//       },
    


//     { 
//           question: "  ", 
//           options: [" ", " ", " ", " "], 
//           answer: 3
//       },
    


//     { 
//           question: "  ", 
//           options: [" ", " ", " ", " "], 
//           answer: 3
//       },
      
  
    
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


