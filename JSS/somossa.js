

let questions = [




    { 
          question: " যদি VOLATILE = 74358231 হয়, তাহলে VOTE = কত হবে ? ", 
          options: [" 7421 ", " 7582", " 7418", " 7481 "], 
          answer: 3
      },


    { 
          question: " সাকিব পূর্ব দিকে ৫ কিমি হাটার পর বাঁ দিকে মোড় নিয়ে ৬ কিমি হাটলো। এরপর ডান দিকে ঘুরে ৯ কিমি হাটলো। সবশেষে ডান দিকে ঘুরে আরো ৬ কিমি হাটার পর সে যেখান থেকে শুরু করেছিলো সেখান থেকে এখন কতদূরে আছে ?", 
          options: ["১১ কিমি  ", " ১৪ কিমি ", " ১৫ কিমি ", " কোনোটিই নয় "], 
          answer: 1
      },


    { 
          question: " দৈনিক ৬ ঘন্টা পরিশ্রম করে ৮ জন ব্যক্তি একটি কাজ ১৫ দিনে করে। দৈনিক ৩ ঘন্টা পরিশ্রম করে ৮ জন ব্যক্তি কাজটি কত দিনে করবে ? ", 
          options: ["২৭ দিনে ", " ২৪ দিনে", " ৩০ দিনে", " ১৬ দিনে "], 
          answer: 2
      },


    { 
          question: " মিজান সরাসরি P অবস্থান থেকে 9 ফুট দূরে অবস্থিত Q স্থানে গেলো। এরপর ডানে ঘুরে 4 ফুট গেলো। এরপর ডানে ঘুরে P থেকে Q দূরত্বের সমান দূরত্ব অতিক্রম করলো। এরপর সর্বশেষ ডানে ঘুরে 3 ফুট গেলে সে এখন P অবস্থান থেকে কয় ফুট দূরে আছে ? ", 
          options: [" 6 ", " 5", " 1", "0 "], 
          answer: 2
      },



    { 
          question: " আয়নায় দেখা গেল ঘড়িতে ৯ঃ৩০ বাজে। প্রকৃত পক্ষে কয়টা বাজে ? ", 
          options: [" ২ঃ৩০ ", " ৩ঃ৩০", " ২ঃ০০", "৩ঃ০০ "], 
          answer: 0
      },


    { 
          question: "  ১৭ দিন আগে জামাল বলেছিল যে, তার জন্মদিন আগামীকাল। আজ মাসের ২৩ তারিখ হলে, তার জন্ম দিন কোন তারিখ ? ", 
          options: ["৫ ", " ৬", " ৭", " ১০"], 
          answer: 2
      },


    { 
          question: "  কে সবচেয়ে ভাল? (i) বশির ফরিদ এর চেয়ে খারাপ (ii) আলি বশির এর চেয়ে ভাল (iii) মনির ফরিদ এর চেয়ে ভাল (iv) আলি মনির এর চেয়ে খারাপ ", 
          options: ["বশির  ", " মনির", " ফারিদ ", " নির্ণয় সম্ভব না "], 
          answer: 1
      },


    { 
          question: "  বাংলা ব্যঞ্জন বর্ণমালারকে যদি বা দিক থেকে ডান দিকে গুনতে শুরু করি তবে এর ৭ম বর্ণের বামদিকের ৫ম বর্ণ কোনটি ?", 
          options: [" ঠ ", " ক", " ঞ", " খ"], 
          answer: 3
      },


]


let questionHistory = [];
let currentQuestionIndex = -1;

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function loadQuestion(question) {
    document.getElementById('question').innerText = question.question;

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('li');
        optionElement.innerText = option;
        optionElement.onclick = () => selectOption(optionElement, index, question.answer);
        optionsList.appendChild(optionElement);
    });

    document.getElementById('prevBtn').disabled = currentQuestionIndex <= 0;
}

function nextQuestion() {
    const nextQuestion = getRandomQuestion();
    questionHistory = questionHistory.slice(0, currentQuestionIndex + 1);
    questionHistory.push(nextQuestion);
    currentQuestionIndex++;
    loadQuestion(nextQuestion);
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(questionHistory[currentQuestionIndex]);
    }
}

function selectOption(element, index, correctAnswer) {
    const options = document.querySelectorAll('.options li');
    
    options.forEach(option => {
        if (!option.classList.contains('correct') && !option.classList.contains('incorrect')) {
            option.classList.remove('selected');
        }
    });

    if (index === correctAnswer) {
        element.classList.add('correct');
        document.getElementById('correctSound').play();
    } else {
        element.classList.add('incorrect');
        document.getElementById('incorrectSound').play();
    }

    element.classList.add('selected');
}

nextQuestion();

// Back Button
function goBack() {
    window.history.back();
}
