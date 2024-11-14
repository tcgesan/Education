let timer;
let timeLeft = 20;


let questions = [

     
    
     { 
         question:  " What is the meaning of the idiom 'a round dozen'  ? ", 
         options: [" a little less than a dozen  ", "  a little more than a dozen ", " a full dozen ", " round about a dozon  "], 
         answer:  2
     },
    
     {
        question: "The idiom  ' Root and branch' means--",
        options: ["from top to bottom","completely","branch like root","none"],
        answer: 1 
    },
    {
        question: " 'To kick off ' means ---- ",
        options: ["to stop","to end","to begin","to kick"],
        answer: 2 
    },

     { 
         question:  " What is the meaning of this idiom - He was always pulling my legs.", 
         options: ["He was always physically aggressive ", " He was always trying to stretch me ", "He was always trying to make fun of me ", "  He was trying to make me stand up."], 
         answer:  2
     },

    
     { 
         question:  " ' Look before you leap ' means ?", 
         options: [" Be ready ", " Be amazed ", "Beaware ", " Be successful "], 
         answer:  2
     },

    
     { 
         question:  " A person whose 'head' is in the 'clouds' is- ", 
         options: [" useless ", "  proud ", " an aviator ", "  a day dreamer "], 
         answer:  3
     },

    
     { 
         question:  " The meaning of ' Cock and bull story ' is --  ", 
         options: [" Strong fight ", "  Painful situation ", " A false story ", " Unequal fight "], 
         answer:  2
     },
    

     { 
         question:  " Choose the appropriate meaning of the idiom ' swan sang '  -- ", 
         options: ["First work  ", " Last work  ", " Middle work ", " Early work  "], 
         answer:  1
     },
    
     
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
    
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
    
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
    
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
    
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
    
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
    
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
    
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
    
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
    
//      { 
//          question:  " ", 
//          options: [" ", "  ", " ", "  "], 
//          answer:  
//      },
     
     
 
 
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


