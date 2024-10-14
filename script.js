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
        options: ['পানি', 'গ্যাস ', ' ইউরেনিয়াম', ' কয়লা'],
        correct: 3
    },
    
    
    
    {
        question: 'পিরানহা কী?',
        options: ['সাপ', 'মাছ ', ' ব্যাঙ', ' কচ্ছপ'],
        correct: 1
    },

    
    
    {
        question: ' বাংলাদেশে নাটক ও নাট্যতত্ত্ব বিষয়ের প্রবর্তক কে?',
        options: ['মৃদুল কান্তি চক্রবর্তী', 'সেলিম আল দীন ', ' জামিল আহমেদ', ' আহমদ ছফা'],
        correct: 1
    },


    
    
    {
        question: ' ম্যাডোনা-৪৩ কি?',
        options: ['প্রখ্যাত মডেল', 'বিখ্যাত ভাস্কর্য ', ' অস্কার জয়ী ফিল্ম', ' একটি  চিত্রকর্ম'],
        correct: 3
    },


    
    
    {
        question: 'আমি বাংলায় গান গাই এর প্রথম গায়ক কে?',
        options: ['সুবীর নন্দী', 'প্রতুল বন্দ্যোপাধ্যায়', ' মাহমুদুজ্জামান বাবু', ' আব্দুল জব্বার'],
        correct: 1
    },

    
    
    {
        question: ' ভাওয়াইয়া কোন অঞ্চলের লোকসংগীত ?',
        options: ['রাজশাহী', ' রংপুর ', ' কুষ্টিয়া', ' ময়মনসিংহে'],
        correct: 1
    },

    
    
    {
        question: ' সব কটি জানালা খুলে দাও না , গানটির সুরকার কে ?',
        options: ['সত্য সাহা ', 'আজাদ রহমান', ' ইমতিয়াজ আহমেদ বুলবুল', ' আলতাফ মাহমুদ'],
        correct: 2
    },


    
    
    {
        question: ' পেরেস্ত্রইকার উদ্ভাবক কে?',
        options: ['ক্লিনটন  ', 'গর্বাচেভ  ', ' ওয়ালেসা', ' ইয়েলৎসিন'],
        correct: 1
    },


    
    
    {
        question: 'কোন বিখ্যাত নেতার মরদেহ এখনো সংরক্ষণ করা আছে ?',
        options: ['   Karl Markru', ' Udro Wilson ', '  Ho Ca Min ', '  Vlademir Elich Lenin '],
        correct: 3
    },

    
    
    {
        question: '    কোন  বছরে রাশিয়ার বলশেভিক বিপ্লব সংঘটিত হয়েছিল?',
        options: ['  ১৯১৬ ', '    ১৯১৭   ', '   ১৯৪৯    ', '  ১৯৬২    '],
        correct: 1
    },


    
    
    {
        question: '          পৃথিবীর প্রথম সমাজতান্ত্রিক দেশের নাম কী  ?',
        options: ['        ভিয়েতনাম  ', '   সোভিয়েত রাশিয়া    ', 'ফ্রান্স   ', '   চীন   '],
        correct:1
    },





    
    {
        question: ' সিআইএস এর  সদরদপ্তর কোথায়  ?',
        options: ['     মস্কোতে  ', ' বাকুতে    ', '   মিনস্কে    ', '    দুশানবে  '],
        correct:2
    },


    
    {
        question: ' Virtue is Knowledge - কার বিখ্যাত উক্তি ?',
        options: ['   প্লেটো  ', '  সক্রেটিস   ', '    এরিস্টটল   ', ' রুশো '],
        correct:1
    },


    
    {
        question: '     হোমার কোন ভাষার কবি ?',
        options: ['    ইংরেজি' ,  '  ল্যাটিন ',' গ্রিক ',' স্প্যানিশ  '],
        correct:2
    },


    
    {
        question: '  বীর আলেকজান্ডারের শিক্ষক কে ছিলেন ?',
        options: ['       সফোক্লিস     ', '  সক্রেটিস     ', ' এরিস্টটল        ', '     প্লেটো '],
        correct:2
    },
    

    {
        question: '   হেরোডোটাস-এর জন্মভূমি কোথায়      ?',
        options: ['      ইতালি     ', '   গ্রিস    ', '   স্পেন    ', '    মিশর  '],
        correct:1
    },



    
    {
        question: '      গণতন্ত্রের ধারণা উৎসারিত হয় প্রথম কোন দেশে ?',
        options: ['     যুক্তরাষ্ট্র      ', '    প্রাচীন গ্রিস   ', '     প্রাচীন রোম   ', ' প্রাচীন ভারত   '],
        correct:1
    },


    {
        question: '    নিজেকে জানো-উক্তিটি কার ?',
        options: ['    সক্রেটিস     ', '   প্লেটো   ', '    পিথাগোরাস  ', ' গৌতম বুদ্ধ   '],
        correct:0
    },


    
    {
        question: '  বর্তমান বিশ্বে নিউ সিল্ক রোড এর প্রবক্তা - ',
        options: ['    জাপান    ', '   ভারত  ', '    আফগানিস্তান   ', '    চীন  '],
        correct:3
    },

        
    {
        question: '  দ্য ওয়ার্ল্ড ডেভেলপমেন্ট রিপোর্ট প্রকাশ করে কে ?',
        options: ['    ব্যাংক  অব আমেরিকা  ', '  বিশ্বব্যাংক   ', '   ইউএনডিপি    ', '  আইএমএফ   '],
        correct:1
    },




    {
        question: ' এ পর্যন্ত বাংলাদেশ এর সংবিধান কতবার সংশোধিত হয়েছে ?',
        options: ['১৪', '১৫', '২০', '১৭'],
        correct: 3
    },

    
    {
        question: ' বর্তমান বৃৃহত্তর ঢাকা জেলা প্রাচীনকালে কোন জনপদের অন্তর্ভুক্ত ছিলো?',
        options: ['সমতট', ' পুন্ড্র ', ' বঙ্গ ', 'হরিকেল'],
        correct: 2
    },




    {
        question: '  কবে ফরাসি বিপ্লব সংঘটিত হয় ?',
        options: ['    ১৭৮৯  ', '   ১৭৯১   ', '   ১৭৯৫ ', '   ১৮০০   '],
        correct:0
    },

    
    {
        question: ' বাংলাদেশকে স্বীকৃতি প্রদানকারী প্রথম আরব দেশ কোনটি ?',
        options: ['  সৌদি আরব ', '  ইরাক   ', ' কুয়েত   ', '  মিসর    '],
        correct:1
    },


    
    {
        question: '  TI এর সদর দপ্তর কোথায়  ?',
        options: ['   ম্যানিলা  ', '   বার্লিন ', '  ব্যাংকক  ', '  সিঙ্গাপুর    '],
        correct:1
    },


    
    // {
    //     question: '   ?',
    //     options: ['       ', '       ', '    ', '      '],
    //     correct:1
    // },


    
    // {
    //     question: '   ?',
    //     options: ['       ', '       ', '    ', '      '],
    //     correct:1
    // },


    
    // {
    //     question: '   ?',
    //     options: ['       ', '       ', '    ', '      '],
    //     correct:1
    // },


    
    // {
    //     question: '   ?',
    //     options: ['       ', '       ', '    ', '      '],
    //     correct:1
    // },

    
    // {
    //     question: '   ?',
    //     options: ['       ', '       ', '    ', '      '],
    //     correct:1
    // },



    
    // {
    //     question: '   ?',
    //     options: ['       ', '       ', '    ', '      '],
    //     correct:1
    // },


    

]
let currentQuestionIndex = 0;

// Shuffle the questions randomly
function shuffleQuestions() {
    for (let i = questions.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
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
            }, 500);
        } else {
            e.target.classList.add('wrong'); // Only add the 'wrong' class but do not proceed to the next question
        }
    });
});

// Initialize the first question
shuffleQuestions();  // Shuffle questions at the start
loadQuestion();      // Load the first question


function handleClick() {
    var sound = document.getElementById("clickSound");
    sound.play();

    // Wait for the sound to play for at least 500ms before redirecting
    setTimeout(function() {
        window.location.href = 'quiz.html';
    }, 150); // Adjust delay as needed
}


function Fact() {
    var sound = document.getElementById("clickSound");
    sound.play();

    // Wait for the sound to play for at least 500ms before redirecting
    setTimeout(function() {
        window.location.href = 'RandomFact.html';
    }, 150); // Adjust delay as needed
}



function riddle() {
    var sound = document.getElementById("clickSound");
    sound.play();

    // Wait for the sound to play for at least 500ms before redirecting
    setTimeout(function() {
        window.location.href = 'riddle.html';
    }, 150); // Adjust delay as needed
}



function gk() {
    var sound = document.getElementById("clickSound");
    sound.play();

    // Wait for the sound to play for at least 500ms before redirecting
    setTimeout(function() {
        window.location.href = 'gk.html';
    }, 150); // Adjust delay as needed
}



function library() {
    var sound = document.getElementById("clickSound");
    sound.play();

    // Wait for the sound to play for at least 500ms before redirecting
    setTimeout(function() {
        window.location.href = 'library.html';
    }, 150); // Adjust delay as needed
}



function text() {
    var sound = document.getElementById("clickSound");
    sound.play();

    // Wait for the sound to play for at least 500ms before redirecting
    setTimeout(function() {
        window.location.href = 'Voice.html';
    }, 150); // Adjust delay as needed
}


function next() {
    var sound = document.getElementById("clickSound");
    sound.play();

    // Wait for the sound to play for at least 500ms before redirecting
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 150); // Adjust delay as needed
}
