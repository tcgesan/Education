// Array of questions
const questions = [
    {
        question: 'PIB কোন দেশের সংবাদ সংস্থা?',
        options: ['পাকিস্তান', 'আমেরিকা', 'পর্তুগাল', 'বাংলাদেশ'],
        correct: 3 // Index of the correct answer
    },
    {
        question: 'জাতিসংঘের বর্তমান মহাসচিব কে?',
        options: ['আন্তোনিও গুতেরেস', 'ব্যারাক ওবামা', 'বিল গেটস', 'জ্যাক মা'],
        correct: 0
    },

    {
        question: '  রামাল্লা কোথায় অবস্থিত  ?',
        options: ['ইরাক', 'আফগানিস্তান', 'ফিলিস্তিন', 'মিসর'],
        correct: 2
    },

    
    {
        question: 'আর্য এটি কীসের নাম ?',
        options: ['ভাষার নাম', 'স্থানের নাম', 'জাতিগোষ্ঠীর নাম', 'গ্রহের নাম'],
        correct: 2
    },


    
    {
        question: 'আর্যদের ধর্মগ্রন্থের নাম কি ?',
        options: ['ত্রিপিটক', 'উপনিষদ', 'বেদ', 'ভগবৎ গীতা'],
        correct: 2
    },

    
    {
        question: 'বাংলাদেশের প্রাচীন জাতি কোনটি?',
        options: ['আর্য', 'মোঙ্গল ', ' পুণ্ড্র', ' দ্রাবিড়'],
        correct: 3
    },


    
    {
        question: 'আর্য জাতি কোন দেশ থেকে এসেছিল?',
        options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
        correct: 2
    },

    
    
    {
        question: ' মাতাবাড়ির বিদ্যুৎকেন্দ্রের  কাঁচামাল কোনটি ?',
        options: ['পানি', 'গ্যাস ', ' ইউরেনিয়াম', ' কায়লা'],
        correct: 3
    },
    
    
    
    {
        question: 'পিরানহা কী?',
        options: ['সাপ', 'মাছ ', ' ব্যাঙ', ' কচ্ছপ'],
        correct: 1
    },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },


    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },


    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },


    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },


    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },


    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },

    
    
    // {
    //     question: ' ?',
    //     options: ['বাহরাইন', 'ইরাক ', ' ইরান', ' মেক্সিকো'],
    //     correct: 2
    // },


];

let currentQuestionIndex = 0;

// Shuffle the questions randomly
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Get DOM elements
const questionText = document.getElementById('question-text');
const options = document.querySelectorAll('.option');

// Function to load a question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    // Load the options
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.setAttribute('data-answer', index == currentQuestion.correct); // Set the correct answer
    });
}

// Add event listeners to the options
options.forEach(option => {
    option.addEventListener('click', (e) => {
        // Check if the selected option is correct
        const isCorrect = e.target.getAttribute('data-answer') === 'true';

        if (isCorrect) {
            e.target.classList.add('correct');

            // Move to the next question after a delay when the correct answer is selected
            setTimeout(() => {
                // Clear the previous selections
                options.forEach(btn => btn.classList.remove('correct', 'wrong'));

                // Move to the next question or loop if all questions are done
                currentQuestionIndex++;
                if (currentQuestionIndex >= questions.length) {
                    // Shuffle questions and restart
                    shuffleQuestions();
                    currentQuestionIndex = 0;
                }
                loadQuestion(); // Load the next question
            }, 400);
        } else {
            e.target.classList.add('wrong'); // Only add the 'wrong' class but do not proceed to the next question
        }
    });
});

// Initialize the first question
shuffleQuestions();  // Shuffle questions at the start
loadQuestion();      // Load the first question
