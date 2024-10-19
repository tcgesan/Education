
const words = document.querySelectorAll(".vocab-item");
let currentIndex = 0;
const wordsPerView = 2; // Show two words at a time
let previousIndex = null;

// Function to show the next set of words
function showNextWords() {
    // Hide the current set of words
    if (previousIndex !== null) {
        for (let i = previousIndex; i < previousIndex + wordsPerView; i++) {
            words[i % words.length].classList.remove("active");
        }
    }

    // Show the next set of words
    previousIndex = currentIndex;
    for (let i = currentIndex; i < currentIndex + wordsPerView; i++) {
        words[i % words.length].classList.add("active");
    }

    // Update the current index to the next set
    currentIndex = (currentIndex + wordsPerView) % words.length;
}

// Function to show the previous set of words
function showPreviousWords() {
    if (previousIndex !== null) {
        // Hide the current set of words
        for (let i = currentIndex - wordsPerView; i < currentIndex; i++) {
            words[(i + words.length) % words.length].classList.remove("active");
        }

        // Show the previous set
        currentIndex = (previousIndex - wordsPerView + words.length) % words.length;
        previousIndex = (previousIndex - wordsPerView + words.length) % words.length;

        for (let i = previousIndex; i < previousIndex + wordsPerView; i++) {
            words[i % words.length].classList.add("active");
        }
    } else {
        alert("No previous words to show yet!");
    }
}

// Show the first two words on page load
window.onload = () => {
    for (let i = 0; i < wordsPerView; i++) {
        words[i].classList.add("active");
    }
};