let timer;
let timeLeft = 20;


let questions = [
    { 
        question: " ✨ . One of the professor's greatest attributes is -------- ?", 
        options: ["When he gives lectures", "how in the manner that he lectures", "the way to give lectures", "his ability to lecture"], 
        answer: 3// Index of the correct answer
    },
    { 
        question: " ✨ . I ___ to a foreign country ?", 
        options: ["was nerver been", "am never gone", "have never been", "am never been"], 
        answer: 2
    },


    { 
        question: " ✨ .  Hurrah ! we have won the match . What kind of sentence is this?", 
        options: ["Assertive", "Optative", "Imperative", "Exclamatory"], 
        answer: 3 
    },
    { 
        question: "✨ . Which one is the correct sentence?", 
        options: ["I know him for two years", "I have been knowing him for two years", "I have know him for two years", "I have known him since years"], 
        answer: 2
    },
    { 
        question: " ✨ . ___ school very young, he is very successful ?", 
        options: ["Although leaving", "In spite of he left", "Because of", "In spite of leaving"], 
        answer: 3 
    },
    
];



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


