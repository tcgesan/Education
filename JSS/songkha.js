let timer;
let timeLeft = 20;


let questions = [



    { 
          question: " পাঁচ অঙ্কের বৃহত্তম সংখ্যা ও ক্ষুদ্রতম সংখ্যার ব্যবধান কত ? ", 
          options: ["৮০০০০ ", " ৮৯৯৯০ ", " ৯০০০০", " ৮৯৯৯৯"], 
          answer: 3
      },

    { 
          question: " একটি স্কুলের ছাত্রদের মধ্যে ২০ শতাংশ বিজ্ঞান ক্লাব এবং ৩০ শতাংশ বাস্কেটবল ক্লাবের ছাত্র। যদি বিদ্যালয়ের ২৫ শতাংশ শিক্ষার্থী বাস্কেটবল ক্লাবে থাকে কিন্তু বিজ্ঞান ক্লাবে না থাকে, তাহলে বিজ্ঞান ক্লাবে থাকা ছাত্রদের কত শতাংশ বাস্কেটবল ক্লাবে নেই ?", 
          options: ["৫০%  ", " ৭৫% ", " ২৫%", " কোনটি নয়"], 
          answer: 1
      },


    { 
          question: " 2-48-16+..... ধারাটির প্রথম নয়টি পদের সমষ্টি কত ? ", 
          options: ["92 ", " -72 ", " 342", " -171 "], 
          answer: 2
      },


    { 
          question: " A, P, R, X, S এবং Z এক সারিতে বসে আছে। S এবং Z এর অবস্থান সবার মধ্যখানে। A এবং P এর অবস্থান সবার প্রান্তবিন্দুতে। R বসে আছে A এর বাঁ দিকে। তাহলে P এর ডানদিকে বসেছে কে ? ", 
          options: ["A ", "R ", " X", "Z "], 
          answer: 2
      },


    { 
          question: "  একটি ট্রেন 'ক' স্টেশন থেকে যাত্রা করে ৪৫ মিনিট পর 'খ' স্টেশনে থামে। স্টেশন দুটির দূরত্ব ৮৪ কিলোমিটার হলে ট্রেনটির গড় গতিবেগ কত ?", 
          options: [" ১১২ কি.মি./ঘন্টা ", " ১১৫ কি.মি./ঘন্টা ", " ১১৮ কি.মি./ঘন্টা ", " ১২০ কি.মি./ঘন্টা  "], 
          answer: 0
      },



    { 
          question: " পরপর তিনটি বিজোড় সংখ্যার যোগফল ৫৭ হলে, মধ্যবর্তী সংখ্যাটি কত ? ", 
          options: [" ১৯ ", " ২১", " ১৭", " ২৫ "], 
          answer: 0
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


