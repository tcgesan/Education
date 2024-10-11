
   // Array of Bangla riddles and their answers
   const riddles = [
    { question: "উল্টে দিলে পর্বত, কি সেই গাছ?", answer: "তালগাছ" },
    { question: "কোন নদী তার নিজের নাম জানে?", answer: "পদ্মা নদী" },
    { question: "যে পাখি কখনো ডিম পাড়ে না?", answer: "কাক" },
    { question: "একটি বালিশে দুজন ঘুমায়, সেটা কি?", answer: "চোখ" },
    
];

let currentRiddleIndex = 0;

// Function to get a new riddle
function getRiddle() {
    // Generate a random index
    currentRiddleIndex = Math.floor(Math.random() * riddles.length);
    
    // Set the riddle text
    document.getElementById("riddle").innerText = riddles[currentRiddleIndex].question;
    
    // Hide the answer until the user clicks "View Answer"
    document.getElementById("answer").style.display = "none";
}

// Function to show the answer
function showAnswer() {
    // Show the answer of the current riddle
    document.getElementById("answer").innerText = riddles[currentRiddleIndex].answer;
    document.getElementById("answer").style.display = "block";
}

// Load a riddle when the page loads
window.onload = getRiddle;