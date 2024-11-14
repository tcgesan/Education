  // Load existing questions from Local Storage or initialize an empty array
        let questions = JSON.parse(localStorage.getItem("questions")) || [];

        // Function to add a question to the array
        function addQuestion() {
            const questionText = document.getElementById("questionInput").value;
            const options = [
                document.getElementById("option1").value,
                document.getElementById("option2").value,
                document.getElementById("option3").value,
                document.getElementById("option4").value
            ];
            const answer = parseInt(document.getElementById("answerInput").value) - 1; // Adjust to 0-based index

            questions.push({
                question: questionText,
                options: options,
                answer: answer
            });

            localStorage.setItem("questions", JSON.stringify(questions));

            displayData();
            document.getElementById("questionForm").reset();
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
                localStorage.setItem("questions", JSON.stringify(questions)); // Update localStorage
                displayData(); // Re-display the data (empty)
                alert("All data deleted successfully.");
            }
        }

        // Initial display of data from Local Storage
        displayData();



    