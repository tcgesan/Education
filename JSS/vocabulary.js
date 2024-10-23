



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
    { english: " Ability", bangla: "সামর্থ্য " },
    { english: "Gain ", bangla: "অর্জন " },
    { english: " Myth", bangla: " উদ্ভিদ" },
    { english: "Motion", bangla: "গতি " },
    { english: "Pole", bangla: "মরু " },
    { english: "Orbit ", bangla: "কক্ষ " },
    { english: "Debt ", bangla: "ঋণ " },
    { english: "Capital ", bangla: " মূলধন " },
    { english: "Deed ", bangla: " দলিল " },
    { english: " Civil ", bangla: " অসামরিক " },
    { english: " Valid", bangla: " বৈধ " },
    { english: " Global ", bangla: " বৈশ্বিক " },
    { english: " Rank ", bangla: " পদমর্যাদা " },
    { english: " Legend", bangla: " কিংবদন্তী " },
    { english: " By-Law", bangla: "  উপ আইন " },
    { english: " Forecast", bangla: " পূর্বাভাস" },
    { english: " Post-Paid", bangla: "পরে প্রদত্ত" },
    { english: "Surplus ", bangla: " উদ্বৃত্ত " },
    { english: " Bookpost", bangla: " খোলাডাক" },
    { english: " Stamp", bangla: " সিলমোহর " },
    { english: " Deed of Gift ", bangla: " দানপত্র " },
    { english: " Embargo ", bangla: " নিষেধাজ্ঞা " },
    { english: " Terminology ", bangla: " পরিভাষা " },
    { english: " Up-To-Date", bangla: " হালনাগাদ" },
    { english: " Impeachment", bangla: " অভিশংসন" },
    { english: " Lien", bangla: "পূর্বস্বত্ব " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
    // { english: " ", bangla: " " },
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
    wordContainer.innerHTML = `<p> <strong> <font color="blue">${word.english} </font></strong> </p><br>
                               <p> ${word.bangla}</p>`;
}

// Set an initial random word
displayRandomWord();



// Back Button
function goBack() {
    window.history.back();
}