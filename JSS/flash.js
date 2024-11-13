const cards = Array.from(document.querySelectorAll('.card'));
let currentIndex = Math.floor(Math.random() * cards.length); // Start with a random card
const cardHistory = [];

// Show the initial random card
function showInitialCard() {
    cards.forEach((card) => card.classList.remove('active'));
    cards[currentIndex].classList.add('active');
}

function getRandomIndex(excludeIndex) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === excludeIndex);
    return randomIndex;
}

function showNextCard() {
    const currentCard = cards[currentIndex];
    cardHistory.push(currentIndex); // Save current index to history for "Previous" button

    // Get a random next card
    const nextIndex = getRandomIndex(currentIndex);
    const nextCard = cards[nextIndex];

    // Animate the current card to exit upwards
    currentCard.classList.remove('active');
    currentCard.classList.add('exiting');

    // Reset current card after animation ends
    setTimeout(() => {
        currentCard.classList.remove('exiting');
        currentCard.style.zIndex = 1;
    }, 300);

    // Animate the next card to enter from below
    nextCard.style.zIndex = 6;
    nextCard.classList.add('entering');

    setTimeout(() => {
        nextCard.classList.remove('entering');
        nextCard.classList.add('active');
    }, 300);

    // Update current index
    currentIndex = nextIndex;
}

function showPreviousCard() {
    if (cardHistory.length === 0) return;

    const currentCard = cards[currentIndex];
    currentCard.classList.remove('active');
    currentCard.classList.add('exiting');

    // Reset current card after animation ends
    setTimeout(() => {
        currentCard.classList.remove('exiting');
        currentCard.style.zIndex = 1;
    }, 300);

    // Get the previous index from history
    const previousIndex = cardHistory.pop();
    const previousCard = cards[previousIndex];

    // Animate the previous card to enter
    previousCard.style.zIndex = 6;
    previousCard.classList.add('entering');
    setTimeout(() => {
        previousCard.classList.remove('entering');
        previousCard.classList.add('active');
    }, 300);

    // Update current index
    currentIndex = previousIndex;
}

// Back Button
function goBack() {
    window.history.back();
}

// Show the initial card on page load
showInitialCard();