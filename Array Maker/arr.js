


let generatedArrays = [];

function generateArray() {
    const text = document.getElementById('text').value.trim();
    const options = [
        document.getElementById('option1').value.trim(),
        document.getElementById('option2').value.trim(),
        document.getElementById('option3').value.trim(),
        document.getElementById('option4').value.trim()
    ];
    const correct = parseInt(document.getElementById('correct').value.trim(), 10) - 1; // Convert 1-based to 0-based index

    // Validation
    if (!text || options.some(opt => opt === "") || isNaN(correct) || correct < 0 || correct >= options.length) {
        alert("Please fill in all fields correctly!");
        return;
    }

    const newArray = {
        text: text,
        options: options,
        correct: correct
    };
    generatedArrays.push(newArray);

    // Clear input fields
    document.getElementById('text').value = '';
    document.getElementById('option1').value = '';
    document.getElementById('option2').value = '';
    document.getElementById('option3').value = '';
    document.getElementById('option4').value = '';
    document.getElementById('correct').value = '';

    displayArrays();
}

function displayArrays() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear existing content

    generatedArrays.forEach((array, index) => {
        const arrayDiv = document.createElement('div');
        arrayDiv.classList.add('array-item');
        arrayDiv.innerText = `{
text: "${array.text}",
options: ["${array.options.join('", "')}"],
correct: ${array.correct}
},`;
        outputDiv.appendChild(arrayDiv);
    });
}

function copyArrays() {
    const allArrays = generatedArrays.map(array => `{
text: "${array.text}",
options: ["${array.options.join('", "')}"],
correct: ${array.correct}
},`).join(',\n');
    navigator.clipboard.writeText(allArrays)
        .then(() => alert('All arrays copied to clipboard!'))
        .catch(err => alert('Failed to copy arrays: ' + err));
}

function deleteArrays() {
    if (confirm('Are you sure you want to delete all arrays?')) {
        generatedArrays = [];
        document.getElementById('output').innerHTML = '';
    }
}