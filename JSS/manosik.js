let timer;
let timeLeft = 20;


let questions = [



    { 
          question: " Divide 30 by half and add 10. What do you get ? ", 
          options: [" 25 ", "45 ", "55 ", " 70"], 
          answer: 3
      },
    


    { 
          question: " একটি দেয়াল ঘড়িতে যখন ৭ : ৪৫ টা বাজে তখন মিনিটের কাঁটা পশ্চিম দিকে থাকলে ঘণ্টার কাঁটা কোন দিকে থাকবে?  ", 
          options: [" দক্ষিণ-পশ্চিম ", " দক্ষিণ-পূর্ব", " উত্তর-পশ্চিম ", " উত্তর-পূর্ব "], 
          answer: 0
      },
    


    { 
          question: " রাশিদা সমতা এর কন্যা। সমতা ও আছিয়া পরস্পর বোন। জাহিদা আছিয়ার মা, মতিয়ার জাহিদার পুত্র। মতিয়ার এর সাথে রাশিদার কি সম্পর্ক ? ", 
          options: [" রাশিদা মতিয়ার এর মেয়ে  ", " রাশিদা মতিয়ার এর মা ", " রাশিদা এর মামা মতিয়ার", " রাশিদা মতিয়ারের খালা "], 
          answer: 2
      },
      

    { 
          question: " 12 কি.মি. হাঁটার পর, আমি ডানদিকে ঘুরলাম এবং তারপর 4কি.মি. হাঁটলাম। তারপরে আমি বাম দিকে ঘুরলাম এবং ৪ কি.মি. হাঁটলাম। শেষ পর্যন্ত আমি উত্তর দিকে এগোচ্ছিলাম। কোন দিক থেকে আমি আমার যাত্রা শুরু করেছি ? ", 
          options: [" উত্তর", " দক্ষিণ  ", " পূর্ব ", " পশ্চিম "], 
          answer: 1
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


