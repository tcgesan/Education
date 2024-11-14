// Initialize localForage to store questions
localforage.config({
    name: 'questionApp',
    storeName: 'questions'
});

// Load existing questions from localForage or initialize an empty array
let questions = [];

// Fetch questions from localForage on page load
localforage.getItem("questions").then(savedQuestions => {
    if (savedQuestions) {
        questions = savedQuestions;
        displayData();
    }
}).catch(err => {
    console.error("Error loading questions: ", err);
});

// Function to add a question to the array
function addQuestion() {
    const questionText = document.getElementById("questionInput").value.trim();
    const options = [
        document.getElementById("option1").value.trim(),
        document.getElementById("option2").value.trim(),
        document.getElementById("option3").value.trim(),
        document.getElementById("option4").value.trim()
    ];
    const answer = parseInt(document.getElementById("answerInput").value);

    // Validate that all fields are filled
    if (!questionText) {
        alert("Please enter the question.");
        return;
    }
    if (options.some(option => !option)) {
        alert("Please fill all options.");
        return;
    }
    if (isNaN(answer) || answer < 1 || answer > 4) {
        alert("Please enter a valid answer number (between 1 and 4).");
        return;
    }

    // Add the question to the array
    questions.push({
        question: questionText,
        options: options,
        answer: answer - 1 // Adjust to 0-based index
    });

    // Save the updated questions array to localForage
    localforage.setItem("questions", questions).then(() => {
        displayData();
        document.getElementById("questionForm").reset(); // Reset form
    }).catch(err => {
        console.error("Error saving question: ", err);
    });
}

// Function to display data in the <pre> tag in desired format
function displayData() {
    const formattedData = questions.map(q => `{
    question: '${q.question}',
    options: ${JSON.stringify(q.options)},
    answer: ${q.answer} 
}`).join('\n\n');
    document.getElementById("dataDisplay").textContent = formattedData;
}

// Function to copy data to clipboard
function copyData() {
    const dataDisplay = document.getElementById("dataDisplay").textContent;
    navigator.clipboard.writeText(dataDisplay).then(() => {
        alert("Questions copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}

// Function to delete all data
function deleteAllData() {
    const confirmation = confirm("Are you sure you want to delete all data?");
    if (confirmation) {
        questions = []; // Clear the array
        localforage.setItem("questions", questions).then(() => {
            displayData(); // Re-display the data (empty)
            alert("All data deleted successfully.");
        }).catch(err => {
            console.error("Error deleting questions: ", err);
        });
    }
}

// Initial display of data from localForage
displayData();