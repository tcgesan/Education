const messages = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const deleteBtn = document.getElementById('deleteBtn');

// Profile pictures
const userPic = 'add.avif'; // User image URL
const botPic = 'gpp.webp'; // Bot image URL



sendBtn.addEventListener('click', sendMessage);
deleteBtn.addEventListener('click', deleteChat);

// Load chat history from localStorage
loadChatHistory();

function sendMessage() {
    const userText = userInput.value.trim();
    if (userText) {
        addMessage(userText, 'user');
        userInput.value = '';
        getBotResponse(userText);
    }
}

function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';

    const profilePic = document.createElement('img');
    profilePic.src = sender === 'user' ? userPic : botPic;
    profilePic.className = 'profile-pic';

    const messageText = document.createElement('div');
    messageText.className = 'message-text';
    messageText.textContent = text;

    messageElement.appendChild(profilePic);
    messageElement.appendChild(messageText);
    messages.appendChild(messageElement);

    // Save chat history to localStorage
    saveChatHistory();

    // Scroll to the bottom
    messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(userText) {
    let botResponse = '';

    const normalizedUserText = normalizeString(userText); // Normalize user input

    // Check for responses based on predefined knowledge
    if (knowledge[normalizedUserText]) {
        botResponse = knowledge[normalizedUserText];
    } else {
        // Check for similarity with predefined responses
        botResponse = checkSimilarity(userText) || "Out of my Database! My database is still upgrading by Ethun 😃!";
    }

    addMessage(botResponse, 'bot');
}

function checkSimilarity(userText) {
    const normalizedUserText = normalizeString(userText); // Normalize user input

    for (const question in knowledge) {
        const normalizedQuestion = normalizeString(question); // Normalize stored question
        const similarity = calculateSimilarity(normalizedUserText, normalizedQuestion);
        if (similarity >= 0.4) { // Adjusted similarity threshold to 40%
            return knowledge[question];
        }
    }
    return null; // No similar question found
}

function calculateSimilarity(userText, storedQuestion) {
    const userKeywords = extractKeywords(userText);
    const storedKeywords = extractKeywords(storedQuestion);
    const totalKeywords = new Set([...userKeywords, ...storedKeywords]).size;
    const matchingKeywords = userKeywords.filter(keyword => storedKeywords.includes(keyword)).length;

    return matchingKeywords / totalKeywords; // Calculate similarity as the ratio of matching keywords
}

function extractKeywords(text) {
    const normalized = text.toLowerCase().replace(/[\W_]+/g, ' ');
    return normalized.split(' ').map(word => removeExtraLetters(word)).filter(Boolean);
}

function removeExtraLetters(word) {
    return word.replace(/(.)\1+/g, '$1'); // Remove repeated letters
}

function normalizeString(str) {
    return str.toLowerCase().replace(/[\W_]+/g, ''); // Normalize to lowercase and remove non-alphanumeric characters
}

function deleteChat() {
    messages.innerHTML = ''; // Clear chat history
    localStorage.removeItem('chatHistory'); // Clear chat history from localStorage
    addMessage("All chat cleared! 😁", 'bot');
}

function saveChatHistory() {
    const chatHistory = messages.innerHTML; // Get chat history HTML
    localStorage.setItem('chatHistory', chatHistory); // Save to localStorage
}

function loadChatHistory() {
    const chatHistory = localStorage.getItem('chatHistory'); // Get chat history from localStorage
    if (chatHistory) {
        messages.innerHTML = chatHistory; // Set chat history HTML
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }
}
