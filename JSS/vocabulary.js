



 // Array of words with English and Bangla meanings
 const words = [
    { english: "Sabotage", bangla: " অন্তর্ঘাত" },
    { english: " Kingdom", bangla: " রাজ্য" },
    { english: "Zodiac ", bangla: " রাশিচক্র" },
    { english: "Will ", bangla: " ইচ্ছাপত্র" },
    { english: "Realism ", bangla: "বাস্তববাদ " },
    { english: "Oath ", bangla: " শপথ" },
    { english: " Nomination", bangla: " মনোনয়ন" },
    { english: "Liberal ", bangla: "উদার " },
    { english: " Jail-code", bangla: " কারাবিধি" },
    { english: " Immigrant", bangla: "অভিবাসী " },
    { english: "Globalisation ", bangla: " বিশ্বায়ন" },
    { english: " Geology", bangla: "ভূতত্ত্ব " },
    { english: " Fiction", bangla: " কথাসাহিত্য" },
    { english: " Era", bangla: "যুগ " },
    { english: "Biography ", bangla: " জীবনি" },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    
    
];

// Function to display a random word
function displayRandomWord() {
    // Get a random word from the array
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];

    // Update the word container with the English and Bangla meanings
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = `<p> <strong> <font color="blue">${word.english} </font></strong> </p><br><hr>
                               <p> ${word.bangla}</p>`;
}

// Set an initial random word
displayRandomWord();



// Back Button
function goBack() {
    window.history.back();
}