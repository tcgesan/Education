
let timer;
let timeLeft = 20;


let questions = [

     
     { 
         question: "........the best car to buy is Mercedes Benz  ", 
         options: [" Because of its durability and economy  ", "  Because it lasts a long time, and it is very economical  ", "  Because of its durability and it is economical  ", " Because durability and economize it is better than all the others  "], 
         answer: 0
     },
     
     { 
         question: "Fill in the blank with appropriate word, phrase and clause(s): He insisted.........there.  ", 
         options: [" on my going ", "  is to go ", " over going  ", " to go  "], 
         answer: 0
     },
     
     { 
         question: "This is the pen I lost. Here 'I lost' is-  ", 
         options: [" A noun clause ", "  An adverbial clause ", " An adjective clause  ", " A prepositional clause  "], 
         answer: 2
     },
     
     
     { 
         question: "  What he knew was clear to all. Here what he knew is- ", 
         options: [" an adjective clause ", "  an adverbual clause ", "  a co-ordinate clause ", " a noun clause "], 
         answer: 3
     },
     
     { 
         question: " The woman ........... was old and bent. ", 
         options: [" I spoke to her ", " that I spoke  ", "  I spoke to ", " Whom I spoke to her "], 
         answer: 2
     },
     
     { 
         question: " Would you like to know- ", 
         options: ["  where he lives?", " the address of his living?  ", " there where he is staying ? ", " his staying address? "], 
         answer: 0
     },
     
     { 
         question: " Identify the quotation clause in the sentence I know the place '' where he was born '' ", 
         options: ["  Adverbial clause ", " Adjective clause  ", " Noun clause  ", " Conditional clause  "], 
         answer: 1
     },
     
     { 
         question: "  Most students don't like homework, and ........", 
         options: [" I don't too ", " either don't  ", "  neither don't", " neither do I "], 
         answer: 3
     },
     
     { 
         question: " Subordinate clauses can be found only in-  ", 
         options: [" Simple Sentence  ", "  Complex Sentence ", " Compound Sentence  ", " Complex and Compound Sentence  "], 
         answer: 1
     },
     
     // { 
     //     question: "  ", 
     //     options: ["  ", "   ", "   ", "  "], 
     //     answer: 3
     // },
     
     // { 
     //     question: "  ", 
     //     options: ["  ", "   ", "   ", "  "], 
     //     answer: 3
     // },
     
     
      
      
     
     
 
 
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


