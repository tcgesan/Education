const questions = [


    //1
    {
        text: "রবীন্দ্রনাথ ঠাকুর কত সালে সাহিত্যে নোবেল পুরষ্কার পান?",
        options: ["১৯০৩ খ্রি", "১৯১৩ খ্রি", "১৯২৩ খ্রি", "১৯৩৩ খ্রি"],
        correct: 1,
    },

// 2

{
text: "'কমলবন' শব্দটিকে কবি 'ফেব্রুয়ারি ১৯৬৯' কবিতায় কী হিসেবে ব্যবহার করেছেন ?",
options: ["ভাবার্থে", "মূল অর্থে", "প্রতীকী অর্থে", "ব্যঞ্জনা অর্থে"],
correct: 2
},

//3
{
text: "'খাজাঞ্চি' বলতে কোন ব্যক্তিকে বোঝায় ?",
options: ["সেনাপতিকে", "নবাবকে", "কোষাধ্যক্ষকে", "গুপ্তচরকে"],
correct: 2
},



//4

{
text: "ব্রিটিশ সিংহ ভয়ে লেজ গুটিয়ে নিলেন, এ এ বড় লজ্জার কথা। উর্মিচাঁদের এই সংলাপের মধ্যদিয়ে আমরা অনুধাবন করতে পারি-     i.সিংহের মতো শক্তি ও সাহস ইংরেজদের আছে    ii. ইংরেজরা ভীরু   iii. ইংরেজরা কাপুরুষ .   নিচের কোনটি সঠিক ?",
options: ["i ও ii", "ii ও iii", "i ও iii", "i  ,  ii ও iii"],
correct: 1
},
];










const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const scoreContainer = document.createElement("div");
let timerElement = document.getElementById("timer");
const startButton = document.getElementById("startTimer");
const showResultButton = document.getElementById("showResult");
let userAnswers = new Array(questions.length).fill(null);
let timerActive = false;
let timerInterval = null; // Declare the timer interval

// Generate quiz questions
questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.innerText = `${index + 1}. ${question.text}`;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    question.options.forEach((option, i) => {
        const optionButton = document.createElement("div");
        optionButton.classList.add("option");
        optionButton.addEventListener("click", () => selectAnswer(optionButton, index, i));

        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.innerText = ["ক", "খ", "গ", "ঘ"][i];

        const optionText = document.createElement("span");
        optionText.style.marginLeft = "40px";
        optionText.innerText = `${option}`;

        optionButton.appendChild(circle);
        optionButton.appendChild(optionText);
        optionsDiv.appendChild(optionButton);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
});

// Answer selection function
const selectAnswer = (optionButton, questionIndex, selectedIndex) => {
    if (!timerActive) return;
    const options = optionButton.parentElement.children;
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("selected");
    }
    optionButton.classList.add("selected");
    userAnswers[questionIndex] = selectedIndex;
};

// Start Timer Function
startButton.addEventListener("click", () => {
    if (timerActive) return;
    startTimer(30);
    timerActive = true;
    showResultButton.disabled = false;
    startButton.disabled = true;
});

// Timer Function
const startTimer = (minutes) => {
    let time = minutes * 60;
    timerInterval = setInterval(() => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        timerElement.innerText = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            timerElement.innerText = "Time Up !";
            calculateResult(); // Auto-submit on time out
        }
    }, 1000);
};

// Calculate Results
showResultButton.addEventListener("click", () => {
    clearInterval(timerInterval); // Stop the timer when result is shown
    timerElement.innerText = "Timer Stopped"; // Optional message
    calculateResult();
});

const calculateResult = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) score++;
    });
    scoreContainer.innerText = `Your Score : ${score} / ${questions.length}`;
    resultContainer.style.display = "block";
    resultContainer.appendChild(scoreContainer);
    revealAnswers();
};

// Reveal Answers
const revealAnswers = () => {
    questions.forEach((question, index) => {
        const options = quizContainer.children[index].querySelectorAll(".option");
        options.forEach((option, i) => {
            option.classList.remove("selected", "correct", "wrong");
            const circle = option.querySelector(".circle");
            if (i === question.correct) {
                option.classList.add("correct");
                circle.classList.add("correct");
            } else if (i === userAnswers[index]) {
                option.classList.add("wrong");
                circle.classList.add("wrong");
            }
        });
    });
};

